import { createStore, combineReducers } from 'redux';
import uuid from 'react-uuid'


const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id = 'aaa' } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id }, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducers = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }

}


const setTextFilter = ({ text = '' } = {}) => ({
    type: 'CHANGE_TEXT_FILTER',
    text,

});
const sortByAmount = () => ({
    type: 'SORT_By_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_By_DATE'
});
const setStartDate = (startDate) => ({
    type: 'CHANGE_START_DATE',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'CHANGE_END_DATE',
    endDate
});

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SORT_By_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_By_DATE':
            return { ...state, sortBy: 'date' }
        case 'CHANGE_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'CHANGE_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }

}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })

};

const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filtersReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    console.log('Filter state : ', state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000 , createdAt: 10}));
const expenseTwo = store.dispatch(addExpense({ description: 'rent', amount: 300, createdAt: 20}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense({ id: expenseTwo.expense.id }, { amount: 500 }))

 store.dispatch(setTextFilter({text: 'rent'}));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(10));
//store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'aaaaaaaaabbbd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 545000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

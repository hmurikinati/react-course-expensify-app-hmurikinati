import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddingExpense, removeExpense, editExpense, addExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses'
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, notes, amount, createdAt }) => {
        expensesData[id] = { description, notes, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '12333' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "12333"
    });
});

test('Should expect edit expense action object', () => {
    const action = editExpense({ id: '1111111' }, { description: 'Hi', amount: '2' })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '1111111',
        updates: {
            description: 'Hi',
            amount: '2'
        }
    });
})



test('should setup add expense action with provided value', () => {
    const expenseData = {
        description: 'Hi',
        notes: 'Bye',
        amount: 1000,
        createdAt: 2000
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    })
})

test("Shoud add expense to database and store", (done) => {
    const expenseData = {
        description: 'Mouse',
        notes: 'This mouse is good',
        amount: 1000,
        createdAt: 2000
    }

    const store = createMockStore({});
    store.dispatch(startAddingExpense(expenseData)).then((response) => {
        const actions = store.getActions();
        expect(actions[0].expense).toEqual({
            id: expect.any(String),
            ...expenseData
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })

})


test("Shoud add expense with defaults to database and store", (done) => {

    const expenseData = {

    }

    const store = createMockStore({});
    store.dispatch(startAddingExpense(expenseData)).then((response) => {
        const actions = store.getActions();

        expect(actions[0].expense).toEqual({
            id: expect.any(String),
            description: '',
            notes: '',
            amount: 0,
            createdAt: 0
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual({
                description: '',
                notes: '',
                amount: 0,
                createdAt: 0
            });
            done();
        })

})

test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test("Should set expenses", () => {
    
    const action =  {
        type: 'SET_EXPENSES',
    expenses : [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]]);
   
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then((response) => {
        //console.log('response : ', );
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    }) 
})
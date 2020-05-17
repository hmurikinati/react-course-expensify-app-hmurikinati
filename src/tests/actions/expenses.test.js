import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddingExpense, removeExpense, editExpense, addExpense, setExpenses, startSetExpenses, startRemoveExpense, startUpdateExpense } from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses'
const createMockStore = configureMockStore([thunk]);

const uid = 'thisismyfakeid';

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, notes, amount, createdAt }) => {
        expensesData[id] = { description, notes, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
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

    const store = createMockStore({auth : { uid }});
    store.dispatch(startAddingExpense(expenseData)).then((response) => {
        const actions = store.getActions();
        expect(actions[0].expense).toEqual({
            id: expect.any(String),
            ...expenseData
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })

})


test("Shoud add expense with defaults to database and store", (done) => {

    const expenseData = {

    }

    const store = createMockStore({auth : { uid }});
    store.dispatch(startAddingExpense(expenseData)).then((response) => {
        const actions = store.getActions();

        expect(actions[0].expense).toEqual({
            id: expect.any(String),
            description: '',
            notes: '',
            amount: 0,
            createdAt: 0
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
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

    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]]);

});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({auth : { uid }});
    store.dispatch(startSetExpenses()).then((response) => {
        
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})

test('Should update expense', (done) => {

    const id = expenses[1].id;
    const updates = {  amount: 10500 };
    const store = createMockStore({auth : { uid }});
    store.dispatch(startUpdateExpense({ id }, updates)).then(() => {

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        })
       
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    })
    .then((snapshot) => {
       
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });

});

test("Should delete expense", (done) => {
    const id = expenses[0].id;

    const store = createMockStore({auth : { uid }});
    store.dispatch(startRemoveExpense({ id })).then(() => {

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expepnses/${id}`).once('value')
    })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        })
})
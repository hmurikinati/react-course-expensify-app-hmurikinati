import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddingExpense, removeExpense, editExpense, addExpense } from '../../actions/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

// test('Add expense action default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })


test('should setup add expense action with provided value', () => {
    const expenseData = {
        description: 'Hi',
        note: 'Bye',
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
        note: 'This mouse is good',
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
            note: '',
            amount: 0,
            createdAt: 0
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual({
                description: '',
                note: '',
                amount: 0,
                createdAt: 0 
            });
            done();
        })

})
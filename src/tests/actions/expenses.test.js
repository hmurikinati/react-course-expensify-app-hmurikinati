import { removeExpense, editExpense, addExpense } from '../../actions/expenses';
import uuid from 'react-uuid';


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

test('Add expense action default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})


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
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})
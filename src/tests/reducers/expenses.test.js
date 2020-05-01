import moment from 'moment'
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const id = expenses[0].id;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses.splice(0, 1) && expenses);
});

test('Should not remove expense if id not found', () => {
    const id = '20';
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("Should add expense", () => {
    const expense = {
        id: '4',
        description: 'Debit card',
        note: '',
        amount: 1000,
        createdAt: moment(0).add('4', 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);

});

test("should edit expense", () => {
 
    const updates = { 
        description: 'Gum tree',
    };

    const action = {
        type : "EDIT_EXPENSE",
        id : expenses[1].id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('Gum tree');
    
});

test("should not edit expense if id not found", () => {
 
    const updates = { 
        description: 'Gum tree',
    };

    const action = {
        type : "EDIT_EXPENSE",
        id : "1000",
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    
});
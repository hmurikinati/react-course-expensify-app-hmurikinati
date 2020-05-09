import uuid from 'react-uuid';
import database from '../firebase/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddingExpense = (expenseData = {}) => {
    console.log('expenseData :', expenseData);
    return (dispatch) =>{
        const {
            description = '',
            notes = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, notes, amount, createdAt};
        return database.ref('expenses').push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }));
        });      
      };
};

export const removeExpense = ({ id = 'aaa' } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = ({ id }, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
import uuid from 'react-uuid';
import database from '../firebase/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddingExpense = (expenseData = {}) => {

    return (dispatch) => {
        const {
            description = '',
            notes = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, notes, amount, createdAt };
        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
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

export const setExpenses = (expenses = {}) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {

    return (dispatch) => {
        return database.ref('expenses').once('value')
            .then((snapshot) => {

                const expenses = [];
                snapshot.forEach((childSnapShot) => {

                    expenses.push({
                        id: childSnapShot.key,
                        ...childSnapShot.val()
                    })
                })
               
                dispatch(setExpenses(expenses))
            })
    }
};

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}) );
        }) 
    }
}

export const startUpdateExpense = ({id}, updates= {}) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense({id}, updates))
        })
    }
}
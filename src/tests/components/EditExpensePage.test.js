import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'
let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[1]} />)
});
test("Should render edit expense page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle edit expense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith({id : expenses[1].id}, expenses[1]);
});


test("Should handle remove expense", () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
   
});
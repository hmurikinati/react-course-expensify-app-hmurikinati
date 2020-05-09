import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let startAddingExpense, history, wrapper;
beforeEach(() => {
    startAddingExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddingExpense={startAddingExpense} history={history} />)
});
test("Should render Addexpense page correctly", () => {

    expect(wrapper).toMatchSnapshot();
});

test('Should handle onsubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddingExpense).toHaveBeenLastCalledWith(expenses[0]);
})
import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'
let wrapper, startUpdateExpense, startRemoveExpense, history;

beforeEach(() => {
    startUpdateExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage startUpdateExpense={startUpdateExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[1]} />)
});
test("Should render edit expense page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle edit expense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startUpdateExpense).toHaveBeenLastCalledWith({id : expenses[1].id}, expenses[1]);
});


test("Should handle remove expense", () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
   
});
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses'

test('Should render Expense list  correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
});



test("should render expense list with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
});
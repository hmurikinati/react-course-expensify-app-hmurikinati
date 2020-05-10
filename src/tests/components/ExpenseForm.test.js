import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render Expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
});

test('Should render Expense form correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
    const value = "Hello world"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {target : {value}})
    expect(wrapper.state('description')).toBe(value);
});

test("Should set note on textarea change", () => {
    const value = "Hello world"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate('change', {target : {value}});
    expect(wrapper.state('notes')).toBe(value);
});

test("Should set amount if valid input", () => {
    const value = '50.98';
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {target : {value}});
    expect(wrapper.state('amount')).toBe(value);
});

test("Should not set amount if invalid input", () => {
    const value = '0.99999';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe("")
});

test("Should call onsubmit prop with valid form submission", () => {
    
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
        description: expenses[1].description,
        notes : ""
    })
});

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find(SingleDatePicker).prop("onDateChange")(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test("Should focus on date picker", () => {
    const focused = true;
     const wrapper = shallow(<ExpenseForm />);
   
     wrapper.find(SingleDatePicker).prop("onFocusChange")({focused})
   
     expect(wrapper.state('calendarFocused')).toBe(focused);
});
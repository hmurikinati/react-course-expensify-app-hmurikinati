import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

test('Should filter by text vaalue', () => {
const filters ={ text: 'e', sortBy:'date', startDate: undefined, endDate: undefined }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);

});

test('Should filter by start date', () => {
    const filters ={ text: '', sortBy:'date', startDate: moment(0), endDate: undefined }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])

});

test('Shold filter by end date', () => {
    const filters = { text: '', sortBy:'date', startDate: undefined, endDate: moment(0) }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
})

test('Should sort by date', () => {
    const filters = { text: '', sortBy:'date', startDate: undefined, endDate: undefined }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);

})

test("Should sort by amount", () => {
    const filters = { text: '', sortBy:'amount', startDate: undefined, endDate: undefined }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
 
})
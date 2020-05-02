import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should return Zero if no expenses", () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test("Should correctly add up single expense", () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});
test("Should return totalexpense", () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(6000);
});
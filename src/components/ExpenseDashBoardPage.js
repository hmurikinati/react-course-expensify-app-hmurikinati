import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;
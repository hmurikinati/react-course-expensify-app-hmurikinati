import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpensesSummary  from './ExpensesSummary';

const ExpenseDashBoardPage = () => (
    <div>
     
        <ExpensesSummary ti={1}/>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;
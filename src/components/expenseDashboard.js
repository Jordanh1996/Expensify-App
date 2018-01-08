import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboard;
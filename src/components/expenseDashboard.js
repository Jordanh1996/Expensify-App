import React from 'react';
import {connect} from 'react-redux';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

const ExpenseDashboard = (props) => (
    <div>
        {props.expenses.length > 0 ? 
        <p>Viewing {props.expenses.length} expenses with a sum of ${props.total}</p> :
        <p></p>
        }
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses: filteredExpenses,
        total: expensesTotal(filteredExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseDashboard)
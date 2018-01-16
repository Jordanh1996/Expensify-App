import React from 'react';
import {connect} from 'react-redux';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';
import {Link} from 'react-router-dom';

const ExpenseDashboard = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses with a sum of <span>${props.total > 0 ? props.total : 0}</span></h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
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
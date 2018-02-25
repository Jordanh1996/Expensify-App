import React from 'react';
import {connect} from 'react-redux';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ExpenseDashboard = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.filteredExpenses.length}</span> expenses with a sum of <span>${props.total > 0 ? numeral(props.total).format('0,0.00') : '0.00'}</span></h1>
                {
                    props.ExpensesLength === props.filteredExpenses.length ?
                    <p>There are no hidden expenses</p> :
                    <p>There are {props.ExpensesLength - props.filteredExpenses.length} hidden expenses</p>
                }
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
        ExpensesLength: state.expenses.length,
        filteredExpenses: filteredExpenses,
        total: expensesTotal(filteredExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseDashboard)
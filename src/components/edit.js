import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class Editpage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.match.params.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.removeExpense}
            >
                        remove
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => {dispatch(startEditExpense(id, expense))},
    startRemoveExpense: (data) => {dispatch(startRemoveExpense(data))}
})


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editpage);
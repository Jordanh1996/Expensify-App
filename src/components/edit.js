import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class Editpage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        this.props.removeExpense({id: this.props.expense.id})
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
    editExpense: (id, expense) => {dispatch(editExpense(id, expense))},
    removeExpense: (data) => {dispatch(removeExpense(data))}
})


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editpage);
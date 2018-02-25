import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import RemoveModal from './removeModal';
import removeModal from './removeModal';

export class Editpage extends React.Component {


    state = {
        removeModalOpen: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.match.params.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        this.setState(() => ({
            removeModalOpen: true
        }))
    }

    confirmRemoveExpense = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    cancelRemoveExpense = () => {
        this.setState(() => ({
            removeModalOpen: false
        }))
    }

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className='button button--secondary' onClick={this.removeExpense}
                    >
                            Remove Expense
                    </button>
                    <RemoveModal
                        isopen={this.state.removeModalOpen}
                        isclose={this.cancelRemoveExpense}
                        confirmRemove={this.confirmRemoveExpense}
                    />
                </div>
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
import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/addExpensePage';
import ExpenseForm from '../../components/expenseForm'
import expenses from '../fixture/expenses'

test('should render add expense page correctly', () => {
    const onSubmit = jest.fn();
    const history = {push: jest.fn()}
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})


import React from 'react';
import {shallow} from 'enzyme';
import {Editpage} from '../../components/edit';
import ExpenseForm from '../../components/expenseForm'
import expenses from '../fixture/expenses'

test('should render edit page correctly', () => {
    const onSubmit = jest.fn();
    const history = {push: jest.fn()}
    const wrapper = shallow(<Editpage onSubmit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})


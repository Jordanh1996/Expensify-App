import React from 'react';
import {shallow} from 'enzyme';
import ExpenseItem from '../../components/expenseItem';
import expenses from '../fixture/expenses';

test('should render expenseList with expenses props correctly', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
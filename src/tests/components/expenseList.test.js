import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/expenseList';
import expenses from '../fixture/expenses';

test('should render expenseList with expenses props correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expenseList with the paragraph tag', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]} />)
    expect(wrapper).toMatchSnapshot()
})
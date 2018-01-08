import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/expenseDashboard';

test('should render expense dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboard />)
    expect(wrapper).toMatchSnapshot()
})


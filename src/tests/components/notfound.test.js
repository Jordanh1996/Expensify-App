import React from 'react';
import {shallow} from 'enzyme';
import Notfound from '../../components/notfound';

test('should render not found correctly', () => {
    const wrapper = shallow(<Notfound />)
    expect(wrapper).toMatchSnapshot()
})





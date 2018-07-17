import React from 'react';
import { shallow } from "enzyme";
import ServicesPage from '../../components/ServicesPage';

test('should correctly render component', () => {
  const wrapper = shallow(<ServicesPage/>);
  expect(wrapper).toMatchSnapshot()
})


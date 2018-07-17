import React from 'react';
import { shallow } from "enzyme";
import SignUpDesign from '../../components/SignUpDesign';

test('should correctly render component', () => {
  const wrapper = shallow(<SignUpDesign/>);
  expect(wrapper).toMatchSnapshot();
})


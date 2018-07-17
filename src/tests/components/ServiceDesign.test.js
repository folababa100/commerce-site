import React from 'react';
import { shallow } from "enzyme";
import ServiceDesign from '../../components/ServiceDesign';

test('should correctly render component', () => {
  const wrapper = shallow(<ServiceDesign/>);
  expect(wrapper).toMatchSnapshot();
})


import React from 'react';
import { shallow } from "enzyme";
import {DashboardMain} from '../../components/DashboardMain';

test('should render component correctly', () => {
  const wrapper = shallow(<DashboardMain/>);
  expect(wrapper).toMatchSnapshot();
})


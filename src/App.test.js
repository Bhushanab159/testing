import App from './App';
import React from 'react';
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

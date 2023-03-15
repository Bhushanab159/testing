import Counter from '../Counter';
import React from 'react';
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  
    const wrapper = shallow(<Counter />);
    const counter = wrapper.find("[data-test='component-counter']")
    expect(counter.length).toBe(1);
  });


  test('renders increment button', () => {

  })

  test('renders counter display', () => {

  })

  test('renders display start at 0', () => {

  })

  test('clicking button increment counter display', () => {

  })
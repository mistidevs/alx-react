import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);    
  });
});
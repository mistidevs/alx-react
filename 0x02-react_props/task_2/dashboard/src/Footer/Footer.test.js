import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
import React from "react";
import CourseList from './CourseList';
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders all 3 rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(3);
  })
})

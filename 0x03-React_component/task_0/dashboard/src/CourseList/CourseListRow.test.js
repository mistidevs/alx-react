import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe ('CourseListRow Component', () => {
  it ('renders one cell with colspan = 2 when textSecondCell is absent', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Misati" isHeader />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2')
  });

  it ('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Misati" isHeader textSecondCell="Wakanda Forever" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it ('renders two cells when isHeader is False', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Misati" textSecondCell="Wakanda Forever" />);
    const tr_elem = wrapper.find('tr')
    expect(tr_elem.find('td').length).toBe(2);
  });
})

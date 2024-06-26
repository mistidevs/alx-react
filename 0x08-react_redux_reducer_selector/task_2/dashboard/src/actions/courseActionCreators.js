import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreators } from 'redux';

export function selectCourse(index) {
  return ({ type: SELECT_COURSE, index: index })
}

export function unSelectCourse(index) {
  return ({ type: UNSELECT_COURSE, index: index })
}

export const boundSelectCourse = index => dispatch => bindActionCreators(selectCourse(index), dispatch);
export const boundUnSelectCourse = index => dispatch => bindActionCreators(unSelectCourse(index), dispatch);

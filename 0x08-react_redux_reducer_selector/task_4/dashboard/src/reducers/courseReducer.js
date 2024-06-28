import { Map } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map({
  courses: Map() // Initialize courses as an Immutable.js Map
});

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], normalizedCourses);

    case SELECT_COURSE:
      return state.updateIn(['courses', action.index], course => ({
        ...course,
        isSelected: true,
      }));

    case UNSELECT_COURSE:
      return state.updateIn(['courses', action.index], course => ({
        ...course,
        isSelected: false,
      }));

    default:
      return state;
  }
}
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { courseReducer, initialState } from "./courseReducer";
import { coursesNormalizer } from "../schema/courses";
import { Map } from 'immutable';

describe("tests for course reducers", () => {
  it("tests the default state returns an empty Map", () => {
    const expected = initialState;
    const state = courseReducer(undefined, {});

    expect(state).toEqual(expected);
  });

  it("tests the FETCH_COURSE_SUCCESS action", () => {
    const testData = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: testData
    };

    const normalizedData = coursesNormalizer(testData);
    const expected = initialState.mergeIn(['courses'], normalizedData);
    const state = courseReducer(undefined, action);

    expect(state).toEqual(expected);
  });

  it("tests the SELECT_COURSE action", () => {
    const testData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2
    };

    const initialStateWithCourses = initialState.set('courses', coursesNormalizer(testData));
    const expected = initialStateWithCourses.updateIn(['courses', action.index], course => ({
      ...course,
      isSelected: true
    }));

    const state = courseReducer(initialStateWithCourses, action);

    expect(state).toEqual(expected);
  });

  it("tests the UNSELECT_COURSE action", () => {
    const testData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const initialStateWithCourses = initialState.set('courses', coursesNormalizer(testData));
    const expected = initialStateWithCourses.updateIn(['courses', action.index], course => ({
      ...course,
      isSelected: false
    }));

    const state = courseReducer(initialStateWithCourses, action);

    expect(state).toEqual(expected);
  });
});

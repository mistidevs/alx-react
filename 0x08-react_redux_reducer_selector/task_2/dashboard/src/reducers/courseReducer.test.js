import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { courseReducer } from "./courseReducer";
import { initialState } from "./uiReducer";

describe("tests for course reducers", () => {
  it("tests the default state returns an empty array", () => {
    const expected = [];
    const state = courseReducer(undefined, {});

    expect(state).toEqual(expected);
  });
  it("tests the FETCH_COURSE_SUCCESS action", () => {
    const expected = [
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
      type: FETCH_COURSE_SUCCESS,
      data: [
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
      ]
    }
    const state = courseReducer(undefined, action);

    expect(state).toEqual(expected);
  });
  it("tests the SELECT_COURSE action", () => {
    const expected = [
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
      type: SELECT_COURSE,
      index: 2
    };
    const initialState = [
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
    ]
    const state = courseReducer(initialState, action);

    expect(state).toEqual(expected);
  });
  it("tests the UNSELECT_COURSE action", () => {
    const initialState = [
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
    const expected = [
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
    ]
    const state = courseReducer(initialState, action);

    expect(state).toEqual(expected);
  });
}) 
import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("checking the correct action types and indices are returned", () => {
  it("returns the correct object for SELECT_COURSE", () => {
    const expectedSelected = { type: SELECT_COURSE, index: 1 };
    const selected = selectCourse(1);

    expect(selected).toEqual(expectedSelected);
  });
  it("returns the correct object for UNSELECT_COURSE", () => {
    const expectedUnselected = { type: UNSELECT_COURSE, index: 1 };
    const unselected = unSelectCourse(1);

    expect(unselected).toEqual(expectedUnselected);
  });
});

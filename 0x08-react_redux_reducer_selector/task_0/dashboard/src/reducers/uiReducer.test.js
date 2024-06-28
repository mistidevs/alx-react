import { toJS } from 'immutable';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { initialState } from "./uiReducer";
import { uiReducer } from "./uiReducer";

describe("checking the states of the reducer", () => {
  it("equals initialState when no action is passed", () => {
    const state = uiReducer(undefined, {});

    expect(state).toEqual(initialState);
  });
  it("equals initialState when SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, SELECT_COURSE);

    expect(state).toEqual(initialState);
  });
  it("isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER is the action", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER }
    const state = uiReducer(undefined, action).toJS();

    expect(state.isNotificationDrawerVisible).toEqual(true);
  });
});

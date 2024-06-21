import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("checking UI Action types", () => {
  it("returns the correct object for LOGIN", () => {
    const email = 'misti@misti.app';
    const password = 'misti_waka';
    const expectedLogin = { type: LOGIN, payload: { user : { email, password } } };
    const loggedIn = login('misti@misti.app', 'misti_waka');

    expect(loggedIn).toEqual(expectedLogin);
  });
  it("returns the correct object for LOGOUT", () => {
    const expectedLogout = { type: LOGOUT };
    const loggedOut = logout();

    expect(loggedOut).toEqual(expectedLogout);
  });
  it("returns the correct object for DISPLAY_NOTIFICATION_DRAWER", () => {
    const expectedDisplay = { type: DISPLAY_NOTIFICATION_DRAWER };
    const displayed = displayNotificationDrawer();

    expect(displayed).toEqual(expectedDisplay);
  });
  it("returns the correct object for HIDE_NOTIFICATION_DRAWER", () => {
    const expectedHide = { type: HIDE_NOTIFICATION_DRAWER };
    const hidden = hideNotificationDrawer();

    expect(hidden).toEqual(expectedHide);
  });
})
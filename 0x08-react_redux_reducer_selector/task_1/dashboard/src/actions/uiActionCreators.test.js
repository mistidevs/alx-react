import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

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
});

/*
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when login is successful', async () => {
    fetchMock.getOnce('/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    try {
      await store.dispatch(loginRequest('test@test.com', 'password'));
      expect(store.getActions()).toEqual(expectedActions);
    } catch (error) {
      expect.fail(`unexpected error: ${error}`);
    }
  });

  it('creates LOGIN and LOGIN_FAILURE when login fails', async () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new Error('API Failure')
    });

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    try {
      await store.dispatch(loginRequest('test@test.com', 'password'));
      expect.fail('expected error to be thrown');
    } catch (error) {
      expect(store.getActions()).toEqual(expectedActions);
    }
  });
});
*/

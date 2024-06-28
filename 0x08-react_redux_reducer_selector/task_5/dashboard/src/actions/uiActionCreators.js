import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { bindActionCreators } from 'redux';

export function login(email, password) {
  return ({ type: LOGIN, payload: { user : { email, password } }});
}

export function logout() {
  return ({ type: LOGOUT });
}

export function displayNotificationDrawer() {
  return ({ type: DISPLAY_NOTIFICATION_DRAWER });
}

export function hideNotificationDrawer() {
  return ({ type: HIDE_NOTIFICATION_DRAWER });
}

export function loginSuccess() {
  return ({ type: LOGIN_SUCCESS });
}

export function loginFailure() {
  return ({ type: LOGIN_FAILURE });
}

export function loginRequest(email, password) {
  return dispatch => {
    dispatch({ type: LOGIN, payload: { email, password } });

    return fetch('/login-success.json')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(error => {
        dispatch(loginFailure());
      });
  };
}

export const boundLogin = (email, password) => dispatch => bindActionCreators(login(email, password), dispatch);
export const boundLogout = () => dispatch => bindActionCreators(logout(), dispatch);
export const boundDisplayNotificationDrawer = () => dispatch => bindActionCreators(displayNotificationDrawer(), dispatch);
export const boundHideNotificationDrawer = () => dispatch => bindActionCreators(hideNotificationDrawer(), dispatch);

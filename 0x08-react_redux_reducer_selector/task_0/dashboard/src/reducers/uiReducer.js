import { Map } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export function uiReducer(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
}

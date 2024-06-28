import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export function uiReducer(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
}

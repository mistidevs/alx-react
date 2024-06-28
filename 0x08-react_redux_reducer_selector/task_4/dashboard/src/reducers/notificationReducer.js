import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes";

export const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {filter: initialState.filter, notifications: action.data.map(notification => ({
        ...notification,
        isRead: false,
      }))};
    case MARK_AS_READ:
      return {filter: initialState.filter, notifications: state.notifications.map(notification => {
        if (notification.id === action.index) {
          return {
            ...notification,
            isRead: true,
          };
        }
        return notification;
      })};
    case SET_TYPE_FILTER:
      return {filter: action.filter, notifications: state.notifications};
    default:
      return state;
  }
}

import { Map } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

// Initial state using Immutable.js Map
export const initialState = Map({
  notifications: Map(),
  filter: "DEFAULT",
});

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({
        filter: initialState.get('filter'),
        notifications: state.get('notifications').merge(normalizedData),
      });

    case MARK_AS_READ:
      return state.updateIn(['notifications', action.index], notification => ({
        ...notification,
        isRead: true,
      }));

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}

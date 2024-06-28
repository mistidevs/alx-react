import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { notificationReducer, initialState } from "./notificationReducer";
import { notificationsNormalizer } from "../schema/notifications";
import { Map } from 'immutable';

describe("tests for notification reducers", () => {
  it("tests the default state returns the needed object", () => {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it("tests the FETCH_NOTIFICATIONS_SUCCESS action", () => {
    const testData = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: testData
    };

    const normalizedData = notificationsNormalizer(testData);
    const expected = initialState.set('notifications', Map(normalizedData)).set('filter', initialState.get('filter'));
    const state = notificationReducer(undefined, action);

    expect(state).toEqual(expected);
  });

  it("tests the MARK_AS_READ action", () => {
    const testData = {
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      2: {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      3: {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    };

    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    const initialStateWithNotifications = initialState.set('notifications', Map(testData));
    const expected = initialStateWithNotifications.updateIn(['notifications', action.index], notification => ({
      ...notification,
      isRead: true
    }));

    const state = notificationReducer(initialStateWithNotifications, action);

    expect(state).toEqual(expected);
  });

  it("tests the SET_TYPE_FILTER action", () => {
    const initialStateWithFilter = initialState.set('filter', "DEFAULT");

    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };

    const expected = initialStateWithFilter.set('filter', action.filter);

    const state = notificationReducer(initialStateWithFilter, action);

    expect(state).toEqual(expected);
  });
});

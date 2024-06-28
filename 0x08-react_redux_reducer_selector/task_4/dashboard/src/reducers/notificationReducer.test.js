import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationReducer } from "./notificationReducer";
import { initialState } from "./notificationReducer";

describe("tests for notification reducers", () => {
  it("tests the default state returns the needed object", () => {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(initialState);
  });
  it("tests the FETCH_NOTIFICATION_SUCCESS action", () => {
    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
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
      ]
    };
    const state = notificationReducer(undefined, action);

    expect(state).toEqual(expected);
  });
  it("tests the MARK_AS_READ action", () => {
    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };   
    const action = {
      type: MARK_AS_READ,
      index: 2
    }; 
    const state = notificationReducer(initialState, action);

    expect(state).toEqual(expected);
  });
  it("tests the SET_TYPE_FILTER action", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };
    const expected = {
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const state = notificationReducer(initialState, action);

    expect(state).toEqual(expected);
  });
}) 
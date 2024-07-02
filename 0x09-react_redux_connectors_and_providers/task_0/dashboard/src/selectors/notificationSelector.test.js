import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';

describe('Notification Selectors', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
      ]
    });
  });

  it('filterTypeSelected should return the filter', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const expected = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
    ]);
    expect(getNotifications(state)).toEqual(expected);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const expected = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    ]);
    expect(getUnreadNotifications(state)).toEqual(expected);
  });
});

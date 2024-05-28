import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  const notifications = [
    { type: 'default', value: 'New course available' },
    { type: 'urgent', value: 'New resume available' },
    { type: 'urgent', html: '<strong>Urgent requirement</strong>' },
  ];

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toBe(true);
  });

  it('the first NotificationItem element renders the correct html', () => {
    const wrapper = shallow(<Notifications notifications={notifications} />);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });
});
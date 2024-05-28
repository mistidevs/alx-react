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
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains('Here is the list of notifications')).toBe(true);
  });

  it('the first NotificationItem element renders the correct html', () => {
    const wrapper = shallow(<Notifications notifications={notifications} displayDrawer={true} />);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });

  it('checks the menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('does not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('renders menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
});
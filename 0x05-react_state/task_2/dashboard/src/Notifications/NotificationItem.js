import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <React.Fragment>
        {type && value ? (
          <li
            onClick={() => markAsRead(id)}
            className={css(
              type === 'urgent'
                ? styles.urgentNotification
                : styles.defaultNotification,
              styles.notificationItem // Apply common styles
            )}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            className={css(
              type === 'urgent'
                ? styles.urgentNotification
                : styles.defaultNotification,
              styles.notificationItem // Apply common styles
            )}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </React.Fragment>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

export default NotificationItem;

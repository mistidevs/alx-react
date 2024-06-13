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
                : styles.defaultNotification
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
                : styles.defaultNotification
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
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

export default NotificationItem;

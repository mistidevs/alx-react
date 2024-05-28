import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
	return (
		<>
			{type && value ? <li data-notification-type={type}>{value}</li> : null}
			{html ? (
				<li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
			) : null}
			{type && !value && !html ? <li data-notification-type={type}></li> : null}
		</>
	);
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;

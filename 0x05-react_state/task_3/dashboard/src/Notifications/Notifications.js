import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const opacityChange = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-5px)' },
  '50%': { transform: 'translateY(5px)' },
  '75%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(0px)' },
};

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		return (
			<React.Fragment>
				{this.props.displayDrawer ? (
					<div className={css(styles.overlay)}>
						<div className={css(styles.notifications)}>
							<div className={css(styles.notificationHeader)}>
								<p className={css(styles.text)}>Here is a list of notifications</p>
								<button
									aria-label='Close'
									onClick={() => console.log('Close button has been clicked')}
									className={css(styles.closeButton)}
								>
									<img src={closeIcon} alt='Close' />
								</button>
							</div>
							<ul>
								{this.props.listNotifications &&
								this.props.listNotifications.length > 0 ? (
									this.props.listNotifications.map(
										({ id, html, type, value }) => (
											<NotificationItem
												key={id}
												markAsRead={this.markAsRead}
												type={type}
												value={value}
												html={html}
											/>
										)
									)
								) : (
									<NotificationItem value='No new notification for now' />
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className={css(styles.menuItem)}>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifications: {
    width: '80%',
    maxWidth: '600px',
    backgroundColor: 'white',
    border: '2px dashed red',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  closeButton: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    position: 'fixed',
    right: '0',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 2000,
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
    '@media (max-width: 900px)': {
      width: '100%',
      textAlign: 'right',
      padding: '10px',
    },
  },
  text: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
    }
  },
  hide: {
    display: 'none',
  }
});


export default Notifications;

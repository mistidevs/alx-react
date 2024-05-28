import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        onClick={handleButtonClick}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '5px',
          width: '24px',
          height: '24px'
        }}
      >
        <img 
          src={closeIcon} 
          alt="close-icon" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="default" html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;

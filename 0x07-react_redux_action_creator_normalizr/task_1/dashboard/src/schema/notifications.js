import notify from '../../../../notifications.json';
import { schema } from 'normalizr';
import { normalize } from 'normalizr';

export const user = new schema.Entity('users');

export const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

export const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(notify, [notification]);

export function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  notify.forEach(notified => {
    if (notified.author.id === userId) {
      userNotifications.push(notified.context)
    }
  });
  return userNotifications;
}

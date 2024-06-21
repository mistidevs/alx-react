import notify from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  notify.forEach(notified => {
    if (notified.author.id === userId) {
      userNotifications.push(notified.context)
    }
  });
  return userNotifications;
}

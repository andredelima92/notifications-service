import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications.repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification.service';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should be not be able unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() =>
      unreadNotification.execute({
        notificationId: 'b43fa2de-1477-432a-bab0-54f92776f020',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});

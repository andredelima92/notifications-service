import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications.repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notification.service';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));
  });

  it('should be not be able read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const readNotification = new ReadNotification(notificationsRepository);

    expect(() =>
      readNotification.execute({
        notificationId: 'b43fa2de-1477-432a-bab0-54f92776f020',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});

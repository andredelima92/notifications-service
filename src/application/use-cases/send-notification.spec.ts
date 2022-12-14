import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications.repository';
import { SendNotification } from './send-notification.service';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: '5daab8d0-c5af-40f7-8a99-75c7d9c0e153',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toStrictEqual(
      notification,
    );
  });
});

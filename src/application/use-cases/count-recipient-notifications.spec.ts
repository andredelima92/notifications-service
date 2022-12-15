import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications.repository';
import { CountRecipientNotifications } from './count-recipient-notifications.service';

describe('Count Recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }));

    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(makeNotification());

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});

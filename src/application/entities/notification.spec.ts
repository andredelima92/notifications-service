import { Content } from './content.entity';
import { Notification } from './notification.entity';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: '12c72deb-7021-47c7-99ca-72e90d725502',
    });

    expect(notification).toBeTruthy();
  });
});

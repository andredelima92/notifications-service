import { Notification } from '../entities/notification.entity';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}

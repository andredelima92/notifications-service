import { NotFoundException } from '@nestjs/common';

export class NotificationNotFound extends NotFoundException {
  constructor() {
    super('Notification not found.');
  }
}

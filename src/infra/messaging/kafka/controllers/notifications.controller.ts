import { SendNotification } from '@application/use-cases/send-notification.service';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}

  @EventPattern('notification.send-notification')
  async handleSendNotification(@Payload() content: SendNotificationPayload) {
    await this.sendNotification.execute(content);
  }
}

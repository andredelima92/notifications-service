import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification.service';
import { CreateNotificationBody } from '../dtos/create-notification-body.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller()
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}
  @Post()
  async create(@Body() dto: CreateNotificationBody) {
    const { category, content, recipientId } = dto;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}

import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification.service';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification.service';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications.service';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.service';
import { ReadNotification } from '@application/use-cases/read-notification.service';
import { UnreadNotification } from '@application/use-cases/unread-notification.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

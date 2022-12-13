import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
  @Get()
  findAll() {
    return this.prisma.notification.findMany();
  }

  @Post()
  create(@Body() dto: CreateNotificationBody) {
    return this.prisma.notification.create({
      data: {
        id: randomUUID(),
        ...dto,
      },
    });
  }
}

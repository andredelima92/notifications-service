import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['dear-dragon-9234-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZGVhci1kcmFnb24tOTIzNCS65oUOHQZMPKbe8pCHUq6bFp8RaHRLOuOUD7Bop48',
          password: 'cd4O6RhbXMZfUpTAD61-02CWZyB0gTa2DJdKv8u0HxmsiHm_fbtL5nKZKfY6fboSPKeqEg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}

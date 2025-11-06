import { Module } from '@nestjs/common';
import { EmailSenderController } from './email-sender.controller';
import { Producer } from './providers/producer';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [EmailSenderController],
  providers: [Producer],
})
export class EmailSenderModule {}

import { Module } from '@nestjs/common';
import { WaiterController } from './waiter.controller';

@Module({
  controllers: [WaiterController]
})
export class WaiterModule {}

import { Module } from '@nestjs/common';
import { DeliveryPersonController } from './delivery-person.controller';

@Module({
  controllers: [DeliveryPersonController]
})
export class DeliveryPersonModule {}

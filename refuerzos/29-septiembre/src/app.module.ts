import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryPersonModule } from './delivery-person/delivery-person.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [ClientModule, DeliveryModule, DeliveryPersonModule, RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

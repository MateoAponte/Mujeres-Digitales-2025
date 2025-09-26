import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheffModule } from './cheff/cheff.module';
import { WaiterModule } from './waiter/waiter.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [CheffModule, WaiterModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

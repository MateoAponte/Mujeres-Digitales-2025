import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('waiter')
export class WaiterController {
  @Post()
  createOrder() {
    console.log('Creando un pedido');
  }

  @Get()
  getOrder() {
    console.log('Obteniendo el pedido');
  }

  @Patch()
  updateOrder() {
    console.log('Joder al mesero para que me traiga una limonada de coco');
  }
}

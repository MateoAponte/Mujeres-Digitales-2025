import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder() {
    console.log('Creando un pedido');
  }

  getOrder() {
    console.log('Obteniendo el pedido');
  }

  updateOrder() {
    console.log('Joder al mesero para que me traiga una limonada de coco');
  }
}

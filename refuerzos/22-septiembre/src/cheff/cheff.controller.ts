import { Controller, Get, Post } from '@nestjs/common';

@Controller('cheff')
export class CheffController {
  @Post()
  receiveOrder() {
    // Te pasaré la información de la orden y tu crearás un registro en la DB con la información
    console.log('Recibo la orden de cocinar un Ratatouille');
  }

  @Get()
  cook() {
    // Un proceso donde el devolverá información al mesero o a la aplicación
    console.log('Recibio los ingredientes y cocino un Ratatouille');
  }
}

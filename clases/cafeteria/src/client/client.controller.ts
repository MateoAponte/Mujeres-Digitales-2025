import { Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';

@Controller('client')
export class ClientController {
  // Pedir café
  @Post()
  askForCoffee() {
    return 'Se solicita un café';
  }
  @Delete('/:id/:name')
  deleteSalesRecord(
    @Param('id', ParseIntPipe) id: number,
    @Param('name') name: string,
  ) {
    return (
      'Se elimino el registro del café con id ' +
      id +
      ' y se pauso la venta de: ' +
      name
    );
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  ParseDatePipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetCoffeeDto } from './dto/get-coffee.dto';
import { UpdateCashRegistrerDto } from './dto/update-cash-registrer.dto';

@Controller('cashier')
export class CashierController {
  @Post()
  createSalesRecord(@Body('id') id) {
    return id;
  }

  @Get('/update-cash-registrer')
  updateCashRegistrer(@Param() param) {
    return 'Se actualizo el registro del cliente';
  }
  @Get(':paymentMethod/:name')
  getCoffee(@Query() query: GetCoffeeDto) {
    return query;
  }
}

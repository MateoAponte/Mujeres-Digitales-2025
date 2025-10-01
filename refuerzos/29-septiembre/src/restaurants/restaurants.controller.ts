import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AvailableRestaurantsDto } from './dtos/available-restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  @Get('/available')
  getAvailableRestaurants(@Query() query: AvailableRestaurantsDto) {
    return `
      Se retorna información sobre restaurantes disponibles en ${query.city}
      a las ${new Date(query.date).toISOString()}
      con la categoría ${query.category}
    `;
  }
  @Get('/promos/:id')
  getPromos(@Param('id') id: number) {
    if (!!id) {
      return `
        Se retorna información sobre las promociones del resturante con id ${id}
      `;
    } else {
      return `
        Se retorna información sobre las promociones de todos los restaurantes
      `;
    }
  }

  @Delete('/:id')
  unsubscribeRestaurant(@Param('id') id: number) {
    return `
      Se desuscribe el restaurante con id ${id} de nuestra app.
    `;
  }
  @Delete('/categories')
  unsubscribeCategories() {
    return `
      Se desuscribe todas las categorías de nuestra app.
    `;
  }
  @Post()
  subscribeRestaurant(@Body('id') id: number) {
    return `
      Se suscribe el restaurante con el id ${id} a nuestra app.
    `;
  }

  @Post('/load-promos')
  loadPromos(@Body('promos') promos: string[], @Body('id') id: number) {
    return `
      Se cargan las promociones ${promos} del restaurante con id ${promos}
    `;
  }
  @Post('/load-promos-all')
  loadPromosAll(@Body('promos') promos: string[], @Body('id') id: number[]) {
    return `
      Se cargan las promociones ${promos} de los restaurantes con id's ${promos}
    `;
  }
}

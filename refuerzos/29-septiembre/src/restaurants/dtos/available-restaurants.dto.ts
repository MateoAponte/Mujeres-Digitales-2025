import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Cities } from '../enum/Cities';
import { Categories } from '../enum/Categories';
import { Type } from 'class-transformer';

// DRY: Don't repeat yourself
export class AvailableRestaurantsDto {
  @IsDate({
    message: 'El formato no coincide con un fecha válida',
  })
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Cities, {
    message:
      'Esa ciudad no esta dentro de nuestra base de datos, prueba con estas: Bogota, Bucaramanga, Medellin',
  })
  city: Cities;

  @IsNotEmpty()
  @IsEnum(Categories, {
    message:
      'Esa categoria no esta dentro de nuestra base de datos, prueba con estas: Mexican, Indian, Hamburguese, Chinese, Sushi, Pizza',
  })
  category: Categories;
}

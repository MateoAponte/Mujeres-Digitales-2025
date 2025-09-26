import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class GetCoffeeDto {
  @Type(() => String)
  @IsString()
  /*@Matches(/^[a-zA-Z]+$/, {
    message: 'El campo "type" solo puede contener letras',
  })*/
  @IsAlpha()
  @IsNotEmpty()
  type: string;

  @Type(() => Number)
  @IsInt()
  size: number;

  @Type(() => Date)
  @IsDate()
  date: Date;

  @Type(() => Number)
  @IsInt()
  price: number;

  @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  isPromo: boolean;

  @IsOptional()
  @IsString()
  promoCode: string;
}

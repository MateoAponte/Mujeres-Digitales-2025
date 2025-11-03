import {
  IsDate,
  IsEmail,
  IsEnum,
  IsISO4217CurrencyCode,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';
import { UserStatus } from '../enums/UserStatus';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  // Tener 3 caracteres en mayusculas y 3 en minúsculas, 3 digitos y un simbolo -> Abc!123
  @Matches(
    /[a-zA-Z]{3}[0-9]{3}[!@#$%^&*()_+<>?:"{}|~-]+[a-zA-Z0-9!@#$%^&*()_+<>?:"{}|~-]+/g,
  )
  password: string;

  @IsPhoneNumber()
  @IsOptional()
  @MaxLength(20)
  phone?: string;

  @IsNotEmpty()
  @IsEnum(UserStatus)
  status: UserStatus;

  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  currency?: string;
}

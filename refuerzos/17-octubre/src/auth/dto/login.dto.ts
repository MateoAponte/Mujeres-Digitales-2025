import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  // Tener 3 caracteres en mayusculas y 3 en minúsculas, 3 digitos y un simbolo -> Abc!123
  @Matches(
    /[a-zA-Z]{3}[0-9]{3}[!@#$%^&*()_+<>?:"{}|~-]+[a-zA-Z0-9!@#$%^&*()_+<>?:"{}|~-]+/g,
  )
  password: string;
}

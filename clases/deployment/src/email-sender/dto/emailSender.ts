import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailSenderDto {
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

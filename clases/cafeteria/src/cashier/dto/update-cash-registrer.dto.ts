import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateCashRegistrerDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+$/g, {
    message: 'El campo "id" debe contener letras y números',
  })
  id: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}

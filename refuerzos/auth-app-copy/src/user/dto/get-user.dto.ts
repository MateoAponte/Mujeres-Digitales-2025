import { IsNotEmpty, IsString } from "class-validator";

export class GetUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  pass: string;
}
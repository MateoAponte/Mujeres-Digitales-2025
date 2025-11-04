import { IsEnum, IsISO4217CurrencyCode, IsISO8601, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID, MaxLength } from "class-validator";
import { Status } from "../enums/Status";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/**
 * Create User DTO
 * @category DTO
 * @dto
 */
export class CreateUserDto {
  /**
   * User name
   */
  @ApiProperty({
    name: 'name',
    required: true,
    type: String,
    description: 'User name',
    example: 'Sofia'
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  name: string;
  
  /**
   * User password
   */
  @ApiProperty({
    name: 'pass',
    required: true,
    type: String,
    description: 'User password',
    example: 'Abc.123$'
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  pass: string;
  
  /**
   * User creation date
   */
  @ApiProperty({
    name: 'createdAt',
    required: false,
    type: Date,
    description: 'User creation date (optional)',
    example: new Date(),
  })
  @IsNotEmpty()
  @IsISO8601()
  @MaxLength(100)
  createdAt: Date;
  
  /**
   * User phone number
   */
  @ApiPropertyOptional({
    name: 'phone',
    type: String,
    description: 'User phone number',
    example: '+57 3214710106'
  })
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
  
  /**
   * Name of the user
  */
  @ApiProperty({
    name: 'status',
    required: true,
    enum: Status,
    description: 'Name of the user (optional)',
    example: Status.ACTIVE,
  })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
  
  /**
   * Currency code that the user uses
   */
  @ApiProperty({
    name: 'currency',
    required: true,
    type: String,
    description: 'Currency code that the user uses (optional)',
    example: 'COP',
  })
  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  currency: string;
}

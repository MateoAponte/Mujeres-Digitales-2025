import { CreateUserDto } from '../dto/create-user.dto';

export class ISaveUser extends CreateUserDto {
  createdAt?: Date;
}

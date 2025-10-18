import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './providers/user.repository';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    /**
     * Inject the User Repository
     */
    private readonly userRepository: UserRepository,

    /**
     * Inject hash password provider
     */
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdAt = new Date();

    const hashPassword = await this.authService.hashPassword(
      createUserDto.password,
    );
    return this.userRepository.createUser({
      ...createUserDto,
      createdAt,
      password: hashPassword,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  findOne(uuid: string) {
    return this.userRepository.findByUUID(uuid);
  }

  update(uuid: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(uuid, updateUserDto);
  }

  remove(uuid: string) {
    return this.userRepository.deleteUserByUUID(uuid);
  }
}

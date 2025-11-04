import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepositoryService } from './user-repository.service';
import { v4 as uuidv4 } from 'uuid';
import { GetUserDto } from '../dto/get-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Service that manages the users
 * @category Services
 * @service
 */
@Injectable()
export class UserService {

  /**
   * Mount the User Service
   */
  constructor(
    /**
     * Inject User Repository
     */
    private readonly userRepository: UserRepositoryService,

    /**
     * Inject Auth Service
     */
    private readonly authService: AuthService
  ) {}

  /**
   * Create a new user
   */
  async create(createUserDto: CreateUserDto) {
    const hashPass = await this.authService.hashPassword(createUserDto.pass);
    const userId = uuidv4();
    const user = {...createUserDto, userId, pass: hashPass};
    return this.userRepository.createUser(user);
  }

  /**
   * Get all users
   */
  findAll() {
    return this.userRepository.findAll();
  }

  /**
   * Get a user
   */
  async findUser(getUserDto: GetUserDto) { 
    try {
      const user = await this.userRepository.findUser(getUserDto.name);
      if(!!user) {
        return await this.authService.login(getUserDto.pass, user);
      }
    } catch (error) {
      return 'Invalid Credentials'
    }
  }

  /**
   * Update a user
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  /**
   * Remove a user
   */
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

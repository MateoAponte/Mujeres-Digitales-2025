import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryService } from './users.repository.service';
import { CreateUserDto } from '../dtos/CreateUserDto.dto';
import { PatchUserDto } from '../dtos/PathUserDto.dto';

@Injectable()
export class UsersService {
  constructor(
    /**
     * Inject Repository Service
     */
    @Inject()
    private readonly usersRepositoryService: UsersRepositoryService,
  ) {}

  createUser(body: CreateUserDto) {
    return this.usersRepositoryService.createUser(body);
  }
  getUser(id: number) {
    return this.usersRepositoryService.findUser(id);
  }
  updateUser(id: number, body: PatchUserDto) {
    return this.usersRepositoryService.updateUser(id, body);
  }
  deleteUser(id: number) {
    return this.usersRepositoryService.deleteUser(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { GetUserDto } from '../dto/get-user.dto';

@Injectable()
export class UserRepositoryService {
  constructor(
    /**
     * Inject User Repository
     */
    @InjectRepository(User) private user: Repository<User>
  ) {}

  createUser(user: User) {
    const tempUser = this.user.create(user);
    return this.user.save(tempUser);
  }

  async findUser(name: string) {
    return await this.user.findOne({
      where: {
        name,
      }
    });
  }

  async findAll() {
    return await this.user.find();
  }
}

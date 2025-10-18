import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { ISaveUser } from '../interface/save-user';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    /**
     * Inject the User repository
     */
    @InjectRepository(User) private repo: Repository<User>,
  ) {}

  async findByUUID(id: string) {
    return await this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.repo.findOne({
      where: {
        email,
      },
    });
  }

  async createUser(userData: ISaveUser) {
    // Check if the user exists
    const user = await this.findByEmail(userData.email);
    if (!!user && user.email === userData.email) return 'El usuario ya existe';

    // Create the user
    const newUser = this.repo.create(userData);

    // Guardarlo en la DB
    return await this.repo.save(newUser);
  }

  async updateUser(uuid: string, userData: UpdateUserDto) {
    if (uuid === undefined) return 'El UUID no puede estar vacío';

    // Find the user
    const user = await this.findByUUID(uuid);
    if (!!user === false) return 'El usuario no existe';

    // Update the user
    const updatedUser = { ...user, ...userData };

    // Guardar la información
    return await this.repo.save(updatedUser);
  }

  async deleteUserByUUID(uuid: string) {
    if (uuid === undefined) return 'El UUID no puede estar vacío';

    // Find the user
    const user = await this.findByUUID(uuid);
    if (!!user === false) return 'El usuario no existe';

    // Remover the user
    await this.repo.delete(uuid);
    return { deleted: true, uuid };
  }
}

import { Module } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepositoryService } from './providers/user-repository.service';
import { AuthModule } from 'src/auth/auth.module';

/**
 * Module that manages the users
 * @module users
 * @category Modules
 */
@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryService],
})
export class UserModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { CreateUserDto } from './dtos/CreateUserDto.dto';
import { PatchUserDto } from './dtos/PathUserDto.dto';
import { CheckUserDto } from './dtos/CheckUserDto.dto';

@Controller('users')
export class UsersController {
  constructor(
    /**
     * Inject Repository Service
     */
    private readonly usersService: UsersService,
  ) {}

  @Post('create-user')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Get('get-user/:email')
  getUser(@Param('email') email: string) {
    return this.usersService.getUser(email);
  }

  @Post('check-user')
  checkUser(@Body() body: CheckUserDto) {
    return this.usersService.checkUser(body);
  }

  @Patch('update-user/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PatchUserDto,
  ) {
    return this.usersService.updateUser(id, body);
  }

  @Delete('delete-user/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}

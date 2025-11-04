import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDoc } from './decorators/documentation/Create';
import { UpdateUserDoc } from './decorators/documentation/Update';
import { DeleteUserDoc } from './decorators/documentation/Delete';
import { GetAllUserDoc } from './decorators/documentation/GetAll';

/**
 * Controller that manages the users
 * @module users
 * @controller
 */
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  /**
   * Create a new user using the most important information of the user and the currency that the user uses
   * @route POST /user
   * @param createUserDto 
   * @throws {DefaultResponse} Retorna un mensaje de error
  */
  @Post()
  @CreateUserDoc()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * Get all users
    * @route GET /user/get-all
    * @throws {DefaultResponse} Retorna un mensaje de error
  */
  @GetAllUserDoc()
  @UseGuards(AuthGuard('jwt'))
  @Get('get-all')
  findAll() {
    return this.userService.findAll();
  }
  
  /**
   * Update an existing user
   * @route PATCH /user/:id
   * @param id 
   * @param updateUserDto 
   * @throws {DefaultResponse} Retorna un mensaje de error
  */
  @UpdateUserDoc()
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  
  /**
   * Delete an user
   * @route DELETE /user/:id
   * @param id 
   * @throws {DefaultResponse} Retorna un mensaje de error
  */
  @DeleteUserDoc()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

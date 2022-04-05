import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { UsersService } from './services/users-service.service'

/*
  Declare the routes and HTTP methods you're going to use here
  Just to remember:
  @HTTP_METHOD(ROUTE)
  function() {}
*/

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.listUsers()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUser()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser()
  }
}

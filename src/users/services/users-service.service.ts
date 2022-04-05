import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UpdateUserDto } from '../dtos/update-user.dto'
import { UsersFactoryService } from './users-factory.service'
import { UsersQueryService } from './users-query.service'

/*
  Main service that serves to redirect to Factory or Query services
  Factory: inserting/updating data into DB
  Query: recieving data from DB
*/

@Injectable()
export class UsersService {
  constructor(
    private usersFactoryService: UsersFactoryService,
    private usersQueryService: UsersQueryService
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersFactoryService.createUser(createUserDto)
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersFactoryService.updateUser(updateUserDto)
  }

  deleteUser() {
    return this.usersFactoryService.deleteUser()
  }

  findUser() {
    return this.usersQueryService.find()
  }

  listUsers() {
    return this.usersQueryService.list()
  }
}

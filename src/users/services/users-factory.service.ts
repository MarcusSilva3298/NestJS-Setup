import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UpdateUserDto } from '../dtos/update-user.dto'
import { IUsersRepository } from '../repositories/users.abstract'

/*
  Insert your inserting/updating data from db business logic here
  Then connect it to the main service 'users-service.service.ts'
*/

@Injectable()
export class UsersFactoryService {
  constructor(private usersRepository: IUsersRepository) {}

  createUser(createUserDto: CreateUserDto): any {
    return this.usersRepository.create()
  }

  updateUser(updateUserDto: UpdateUserDto): any {
    return this.usersRepository.update()
  }

  deleteUser(): any {
    return this.usersRepository.delete()
  }
}

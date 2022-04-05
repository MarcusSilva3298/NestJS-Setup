import { Injectable } from '@nestjs/common'
import { IUsersRepository } from '../repositories/users.abstract'

/*
  Insert your recieving data from db business logic here
  Then connect it to the main service 'users-service.service.ts'
*/

@Injectable()
export class UsersQueryService {
  constructor(private usersRepository: IUsersRepository) {}

  find(): any {
    return this.usersRepository.find()
  }

  list(): any {
    return this.usersRepository.list()
  }
}

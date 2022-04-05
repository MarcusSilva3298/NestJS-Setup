import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { IUsersRepository } from './repositories/users.abstract'
import { UsersService } from './services/users-service.service'
import { UsersFactoryService } from './services/users-factory.service'
import { UsersQueryService } from './services/users-query.service'
import { PrismaModule } from '../prisma/prisma.module'
import { UsersRepository } from './repositories/users.repository'

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersFactoryService,
    UsersQueryService,
    { provide: IUsersRepository, useClass: UsersRepository }
  ]
})
export class UsersModule {}

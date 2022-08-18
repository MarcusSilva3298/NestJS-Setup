import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { IUsersRepository } from './users.abstract'

// Implement the methods declared in the 'users.abstract.ts' here

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(): Promise<any> {
    return await this.prisma.user.create({
      data: {
        id: '1',
        email: 'teste@teste.com',
        password: 'tests'
      }
    })
  }

  async update(): Promise<any> {
    return await Promise.resolve(() => {
      return 'usuário modificado'
    })
  }

  async delete(): Promise<any> {
    return await Promise.resolve(() => {
      return 'usuário deletado'
    })
  }

  async find(): Promise<any> {
    return await Promise.resolve(() => {
      return 'usuário encontrado'
    })
  }

  async list(): Promise<any> {
    return await Promise.resolve('usuarios listados')
  }
}

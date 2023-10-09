import { User } from '../../entities/user';
import { prisma } from '../../providers/prisma-provider'
import type { CreateUserDTO } from '../../use-cases/user/dtos/create-user-dto'
import { UpdateUserDTO } from '../../use-cases/user/dtos/update-user-dto';
import type { UserRepository } from '../user-repository'

export class UserPrismaRepository implements UserRepository {
  async create ({ age, email, name, password }: CreateUserDTO): Promise<User> {
    const result = await prisma.user.create({
      data: { age, email, name, password }
    })
    const user = new User({
      id: result.id,
      age: result.age,
      email: result.email,
      name: result.name,
      password: result.password
    })
    return user
  }

  async findAll (): Promise<User[]> {
    const results = await prisma.user.findMany()
    return results.map(user => new User({
      id: user.id,
      age: user.age,
      email: user.email,
      name: user.name,
      password: user.password
    }))
  }

  async findById(id: number): Promise<User> {
    const result = await prisma.user.findUnique({
      where: {
        id
      }
    }
    )
    if (result === null) {
      throw new Error('User not found')
    }
    return new User({
      id: result.id,
      age: result.age,
      email: result.email,
      name: result.name,
      password: result.password
    })
  }

  async updateById(id: number, {age, email, name, password}: UpdateUserDTO): Promise<User>{
    const result = await prisma.user.update({
      data: {age, email, name, password},
      where: {id}
    })
    return new User({
      id: result.id,
      age: result.age,
      email: result.email,
      name: result.name,
      password: result.password
    })
  }
}

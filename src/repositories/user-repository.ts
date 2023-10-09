import type { CreateUserDTO } from './../use-cases/user/dtos/create-user-dto'
import type { User } from '../entities/user'
import { UpdateUserDTO } from '../use-cases/user/dtos/update-user-dto'

export interface UserRepository {
  create: (params: CreateUserDTO) => Promise<User>
  findAll: () => Promise<User[]>
  findById: (id: number) => Promise<User>
  updateById: (id: number, params: UpdateUserDTO) => Promise<User>
}

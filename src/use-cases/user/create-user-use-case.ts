import { User } from '../../entities/user'
import type { UserRepository } from '../../repositories/user-repository'
import type { CreateUserDTO } from './dtos/create-user-dto'

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ) { }

  async execute({ name, age, email, password }: CreateUserDTO): Promise<User> {
    const user = await this.userRepository.create({ name, age, email, password })
    return user
  }
}
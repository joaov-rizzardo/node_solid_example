import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";

export class FindAllUserUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async execute(): Promise<User[]> {
        const users = await this.userRepository.findAll()
        return users
    }
}
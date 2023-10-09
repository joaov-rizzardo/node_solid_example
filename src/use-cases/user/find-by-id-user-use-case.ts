import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";

export class FindByIdUserUseCase {

    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<User> {
        const user = await this.userRepository.findById(id)
        return user
    }
}
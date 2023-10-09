import { UserRepository } from "../../repositories/user-repository";
import { UpdateUserDTO } from "./dtos/update-user-dto";

export class UpdateUserUseCase {

    constructor(
        private readonly userRepository: UserRepository
    ){}
    
    async execute(id: number, {age, email, name, password}: UpdateUserDTO){
        return await this.userRepository.updateById(id, {age, email, name, password})
    }
}
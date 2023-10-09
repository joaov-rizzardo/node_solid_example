import { InMemoryUserRepository } from "../../repositories/in-memory-repositories/in-memory-user-repository"
import { UpdateUserUseCase } from './update-user-use-case';

let userRepository: InMemoryUserRepository
let sut: UpdateUserUseCase

describe('Update user use case', () => {
    beforeEach(() => {
        userRepository = new InMemoryUserRepository()
        sut = new UpdateUserUseCase(userRepository)
    })

    it('should update user by id', async () => {
        const createdUser = await userRepository.create({
            age: 23,
            email: 'joao@teste.com',
            name: 'João Victor',
            password: '12345678'
        })
        const updatedUser = await sut.execute(createdUser.id, {
            age: 35,
            email: 'teste@teste.com',
            name: 'teste',
            password: '12345678'
        })
        expect(createdUser).toHaveProperty('id', updatedUser.id)
        expect(updatedUser).not.toEqual(createdUser)
    })
})
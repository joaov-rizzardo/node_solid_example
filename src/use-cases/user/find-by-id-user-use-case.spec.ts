import { randomUUID } from 'node:crypto';
import { InMemoryUserRepository } from "../../repositories/in-memory-repositories/in-memory-user-repository"
import { FindByIdUserUseCase } from "./find-by-id-user-use-case"

let userRepository: InMemoryUserRepository
let sut: FindByIdUserUseCase

describe('Find by id user use case', () => {
    beforeEach(() => {
        userRepository = new InMemoryUserRepository()
        sut = new FindByIdUserUseCase(userRepository)
    })

    it('should find user by id', async () => {
        const createdUser = await userRepository.create({
            age: 23,
            email: 'joao@teste.com',
            name: 'João Victor',
            password: '12345678'
        })
        
        const user = await sut.execute(createdUser.id)
        expect(user.id).toBe(createdUser.id)
        expect(user).toEqual(createdUser)
    })

    it('should throw error on search uncreated user', async () => {
        const user = await userRepository.create({
            age: 23,
            email: 'joao@teste.com',
            name: 'João Victor',
            password: '12345678'
        })

        const randomId = user.id * 2

        await expect(async () => {
            await sut.execute(randomId)
        }).rejects.toThrow('User not found')
    })
})
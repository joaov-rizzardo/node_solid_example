import { InMemoryUserRepository } from "../../repositories/in-memory-repositories/in-memory-user-repository"
import { FindAllUserUseCase } from "./find-all-user-use-case"


let userRepository: InMemoryUserRepository
let sut: FindAllUserUseCase

describe('Find all user use case', () => {

    beforeEach(() => {
        userRepository = new InMemoryUserRepository()
        sut = new FindAllUserUseCase(userRepository)
    })

    it('should be able to find users', async () => {

        await userRepository.create({
            age: 23,
            email: 'joao@teste.com',
            name: 'João Victor',
            password: '12345678'
        })

        await userRepository.create({
            age: 28,
            email: 'cattarina@teste.com',
            name: 'Cattarina',
            password: '12345678'
        })

        await userRepository.create({
            age: 64,
            email: 'rosangela@teste.com',
            name: 'rosangela',
            password: '12345678'
        })

        const users = await sut.execute()
        expect(users).toHaveLength(3)
        expect(users).toEqual([

            expect.objectContaining({
                age: 23,
                email: 'joao@teste.com',
                name: 'João Victor',
                password: '12345678'
            }),

            expect.objectContaining({
                age: 28,
                email: 'cattarina@teste.com',
                name: 'Cattarina',
                password: '12345678'
            }),

            expect.objectContaining({
                age: 64,
                email: 'rosangela@teste.com',
                name: 'rosangela',
                password: '12345678'
            })
        ])
    })
})
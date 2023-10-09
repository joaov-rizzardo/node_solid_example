import { User } from '../../entities/user';
import { InMemoryUserRepository } from './../../repositories/in-memory-repositories/in-memory-user-repository';
import { CreateUserUseCase } from './create-user-use-case';

describe("Create User Use Case", () => {
    it('should create user', async () => {
        const inMemoryRepository = new InMemoryUserRepository()
        const sut = new CreateUserUseCase(inMemoryRepository)
        const user = await sut.execute({
            age: 35,
            email: 'teste@teste.com',
            name: 'John Doe',
            password: '12345678'
        })
        expect(user).toBeInstanceOf(User)
    })
})

import { User } from "../../entities/user";
import { CreateUserDTO } from "../../use-cases/user/dtos/create-user-dto";
import { UpdateUserDTO } from "../../use-cases/user/dtos/update-user-dto";
import { generateRandomNumber } from "../../utils/generate-random-number";
import { UserRepository } from "../user-repository";
import { randomUUID } from 'node:crypto'

interface InMemoryUserRepositoryUser {
    id: number
    email: string
    name: string
    age: number
    password: string
}

export class InMemoryUserRepository implements UserRepository {

    private users: InMemoryUserRepositoryUser[] = []

    async create({ name, age, email, password }: CreateUserDTO): Promise<User> {
        const user = {
            id: generateRandomNumber(),
            email,
            name,
            age,
            password,
        }
        this.users.push(user)
        return new User(user)
    }

    async findById(id: number): Promise<User> {
        const user = this.users.find(user => user.id === id)
        if (!user) {
            throw new Error('User not found')
        }
        return new User(user)
    }

    async findAll(): Promise<User[]> {
        return this.users.map(user => new User(user))
    }

    async updateById(id: number, { age, email, name, password }: UpdateUserDTO): Promise<User> {
        const index = this.users.findIndex(user => user.id === id)
        this.users[index] = {
            id: this.users[index].id,
            age, email, name, password
        }
        const user = this.users[index]
        return new User(user)
    }
}
import { Request, Response } from "express";
import { CreateUserDTO } from "../../../use-cases/user/dtos/create-user-dto";
import { UserPrismaRepository } from "../../../repositories/prisma-repositories/user-prisma-repository";
import { CreateUserUseCase } from "../../../use-cases/user/create-user-use-case";

export async function create(req: Request, res: Response){
    try{
        const {age, email, name, password}: CreateUserDTO = req.body
        const userRepository = new UserPrismaRepository()
        const sut = new CreateUserUseCase(userRepository)
        const user = await sut.execute({age, email, name, password})
        return res.status(201).send(user.convertToObject())
    }catch(error: any){
        console.log(error)
        return res.status(500).send({message: 'Server internal error'})
    }
}
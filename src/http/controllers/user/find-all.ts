import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../repositories/prisma-repositories/user-prisma-repository";
import { FindAllUserUseCase } from "../../../use-cases/user/find-all-user-use-case";

export async function findAll(req: Request, res: Response){
    try{
        const userRepository = new UserPrismaRepository()
        const sut = new FindAllUserUseCase(userRepository)
        const users = await sut.execute()
        return res.status(200).send(users.map(user => user.convertToObject()))
    }catch(error: any){
        console.log(error)
        return res.status(500).send({message: 'Server internal error'})
    }
}
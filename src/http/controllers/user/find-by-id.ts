import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../repositories/prisma-repositories/user-prisma-repository";
import { FindByIdUserUseCase } from "../../../use-cases/user/find-by-id-user-use-case";

export async function findById(req: Request, res: Response){
    try{
        const id = parseInt(req.params.userId)
        const userRepository = new UserPrismaRepository()
        const sut = new FindByIdUserUseCase(userRepository)
        const user = await sut.execute(id)
        return res.status(200).send(user.convertToObject())
    }catch(error: any){
        console.log(error)
        return res.status(500).send({message: 'Server internal error'})
    }
}
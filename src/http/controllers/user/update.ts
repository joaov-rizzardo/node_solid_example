import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../repositories/prisma-repositories/user-prisma-repository";
import { UpdateUserDTO } from "../../../use-cases/user/dtos/update-user-dto";
import { UpdateUserUseCase } from "../../../use-cases/user/update-user-use-case";

interface UpdateUserInterface extends UpdateUserDTO {
    id: number
}

export async function update(req: Request, res: Response){
    try{
        const {id, age, email, name, password}: UpdateUserInterface = req.body
        const userRepository = new UserPrismaRepository()
        const sut = new UpdateUserUseCase(userRepository)
        const user = await sut.execute(id, {age, email, name, password})
        return res.status(200).send(user.convertToObject())
    }catch(error: any){
        console.log(error)
        return res.status(500).send({message: 'Server internal error'})
    }
}
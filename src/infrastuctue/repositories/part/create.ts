import { Prisma, PrismaClient } from "@prisma/client";
import { IPart, Part } from "../../../domain/entities/part";
import { IPartRepository } from "../../../domain/repositoies/part";

export class PartRepository implements IPartRepository {
  constructor(private readonly prisma: PrismaClient| Prisma.TransactionClient){}

  async create(props: Parameters<IPartRepository['create']>[0]): Promise<IPart> {
   const {id, name} = await this.prisma.bodyPart.create({
    data: {
      name: props.name
    }
  })
  return new Part({
    id: id,
    name: name
  })
  }
}
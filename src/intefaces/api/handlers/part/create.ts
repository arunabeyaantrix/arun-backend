import { FastifyReply, FastifyRequest } from "fastify"
import { isLeft } from "fp-ts/lib/Either"
import { prisma } from "../../../../app"
import { PartRepository } from "../../../../infrastuctue/repositories/part/create"
import * as response from '../../../../intefaces/api/responses/part'
import * as useCase from "../../../../usecases/create_part"

type CreateRequest = FastifyRequest<{
  Body: {
    name: string
  }
}>

export async function index ({body}: CreateRequest, reply: FastifyReply) {
  let newPart
  try {
    newPart = await prisma.$transaction(async(tx) => {
      const {name} = body
      const repository = new PartRepository(tx)
      const either =await  useCase.execute({repository, name})

      if(isLeft(either)){
        throw either.left
      }

      return either.right
    })
  } catch(error) {
    throw error
  }

  return response.format(newPart)
}
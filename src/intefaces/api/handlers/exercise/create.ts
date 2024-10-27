import { FastifyReply, FastifyRequest } from "fastify"
import { isLeft } from "fp-ts/lib/Either"
import { prisma } from "../../../../app"
import { ExerciseRepository } from "../../../../infrastuctue/repositories/excercise/create"
import * as response from '../../../../intefaces/api/responses/exercise'
import * as useCase from "../../../../usecases/create_excercise"


type CreateRequest = FastifyRequest<{
  Body: {
    title: string
    machineType: string
    type: string
    typeDescription:string
    bodyPart: string
  }
}>

export async function index({body}: CreateRequest, reply: FastifyReply) {
  let newExercise;
  try {
    newExercise = await prisma.$transaction(async(tx) => {
      const {title, machineType, type, typeDescription, bodyPart} = body
      const repository = new ExerciseRepository(tx)
      const either = await useCase.execute({repository, title, machineType, type, typeDescription, bodyPart}) ?? { _tag: 'Left', left: new Error('Unexpected undefined result') }
      if(isLeft(either)) {
        throw either.left
      }
      return either.right
    })
  }catch(error) {
    throw(error)
  }
  return response.format(newExercise)
}
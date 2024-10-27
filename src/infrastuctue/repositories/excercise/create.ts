import { Prisma, PrismaClient } from "@prisma/client";
import { Exercise, IExercise } from "../../../domain/entities/exercise";
import { IExerciseRepository } from "../../../domain/repositoies/exercise";

export class ExerciseRepository implements IExerciseRepository {
  constructor(private readonly prisma: PrismaClient | Prisma.TransactionClient) {}

  async create(props: Parameters<IExerciseRepository['create']>[0]): Promise<IExercise> {
    const {id} = await this.prisma.exercise.create({
      data: {
        title: props.title,
        machineType: props.machineType,
        type: props.type,
        typeDescription: props.typeDescription,
        bodyPartId: props.bodyPart
      }
    })
    return new Exercise({
      id: id,
      title: props.title,
      machineType: props.machineType,
      type: props.type,
      typeDescription: props.typeDescription,
      bodyPart: props.bodyPart
    })
  }
}
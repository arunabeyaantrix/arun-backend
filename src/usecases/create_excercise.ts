import { left, right } from "fp-ts/lib/Either";
import { IExerciseRepository } from "../domain/repositoies/exercise";

interface input {
  repository: IExerciseRepository
  title: string
  type: string
  machineType: string
  typeDescription: string
  bodyPart: string
}
export function execute({repository: repo,title, type, typeDescription, machineType, bodyPart}: input) {
  try {
    const result = repo.create({
      title, type, typeDescription, machineType, bodyPart
    })
    return right(result)
  } catch(error) {
    return left(error)
  }
}
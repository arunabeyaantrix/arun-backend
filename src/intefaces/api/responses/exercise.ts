import { IExercise } from "../../../domain/entities/exercise";

export interface ExerciseResponse {
  id: IExercise['id']
  title: IExercise['title']
  machineType: IExercise['machineType']
  type: IExercise['type']
  typeDescription: IExercise['typeDescription']
  bodyPart: IExercise['bodyPart']
}

export function format(exercise: IExercise): ExerciseResponse {
  return {
    id: exercise.id,
    title: exercise.title,
    machineType: exercise.machineType,
    type: exercise.type,
    typeDescription: exercise.typeDescription,
    bodyPart: exercise.bodyPart
  }
}
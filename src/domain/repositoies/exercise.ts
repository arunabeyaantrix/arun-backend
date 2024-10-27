import { IExercise } from "../entities/exercise"

interface IExerciseProps {
  title: string,
  machineType: string
  type:string
  typeDescription: string
  bodyPart: string
}

export interface IExerciseRepository {
  create(props: IExerciseProps): Promise<IExercise>
}

export interface IExercise {
  id: string,
  title: string,
  machineType: string,
  type: string
  typeDescription: string
  bodyPart: string
}

export interface ExerciseProps {
  readonly id: IExercise['id']
  title: IExercise['title'],
  machineType: IExercise['machineType']
  type: IExercise['type']
  typeDescription: IExercise['typeDescription']
  bodyPart: IExercise['bodyPart']
}

export class Exercise implements IExercise {
  public readonly id: IExercise['id']
  public readonly title: IExercise['title']
  public readonly machineType: IExercise['machineType']
  public readonly type: IExercise['type']
  public readonly typeDescription: IExercise['typeDescription']
  public readonly bodyPart: IExercise['bodyPart']

  constructor(props: ExerciseProps) {
    this.id = props.id
    this.title = props.title
    this.machineType = props.machineType
    this.type = props.type
    this.typeDescription = props.typeDescription
    this.bodyPart = props.bodyPart
  }
}
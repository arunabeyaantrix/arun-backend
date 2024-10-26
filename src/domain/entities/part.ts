export interface IPart {
  id: string
  name: string
}

export interface PartProps {
  readonly id: IPart['id']
  name: IPart['name']
}

export class Part implements IPart {
  public readonly id: IPart['id']
  public readonly name: IPart['name']

  constructor(props: PartProps) {
    this.id = props.id
    this.name = props.name
  }
}
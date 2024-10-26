import { IPart } from "../entities/part";

export interface IPartRepository {
  create(props: {name: IPart['name']}): Promise<IPart>
}
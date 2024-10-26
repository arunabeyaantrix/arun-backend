import { IPart } from "../../../domain/entities/part";

export interface PartResponse {
  id: IPart['id'],
  name: IPart['name']
}

export function format(part: IPart): PartResponse {
  return {
    id: part.id,
    name: part.name
  }
}
import { left, right } from "fp-ts/lib/Either";
import { IPartRepository } from "../domain/repositoies/part";

interface input  {
  repository: IPartRepository,
  name: string
}
export async function execute ({
  repository: repo,
  name
}: input) {
  try {
    const newPost = repo.create({name})
    return right(newPost)
  } catch(error) {
    return left(error)
  }
  
}
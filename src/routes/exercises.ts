
import { FastifyInstance } from 'fastify';
import { prisma } from '../app';

import * as addExercise from "../intefaces/api/handlers/exercise/create";

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async(_req, reply) => {
    const result = await prisma.exercise.findMany()
    reply.send(result)
  })

 fastify.post('/', {handler: addExercise.index})
}
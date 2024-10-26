
import { FastifyInstance } from 'fastify';
import { prisma } from '../app';

import * as addPart from "../intefaces/api/handlers/part/create";

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async(_req, reply) => {
    const result = await prisma.bodyPart.findMany()
    reply.send(result)
  })

 fastify.post('/', {handler: addPart.index})
}
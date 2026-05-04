import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { ZodError } from 'zod'
import { env } from './env/index.js'
import { usersRoutes } from './http/controllers/users/routes.js'
import { gymsRoutes } from './http/controllers/gyms/routes.js'
import { checkInRoutes } from './http/controllers/cherck-ins/routes.js'

export const app = fastify()
app.register(fastifyJwt, {
  secret: env.JWT_SECRETE,
})

app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV === 'production') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

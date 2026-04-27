import { FetchUserCheckInHistoryUseCaseCase } from '../fetch-user-check-ins-history.js'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.js'

export function makeFetchCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInHistoryUseCaseCase(checkInsRepository)

  return useCase
}

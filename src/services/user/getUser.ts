import { userQueries } from '@/database/queries'

export const getUser = (id: string) => userQueries.getOne(id)

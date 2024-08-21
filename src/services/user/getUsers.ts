import { userQueries } from '@/database/queries'

export const getUsers = () => userQueries.get()

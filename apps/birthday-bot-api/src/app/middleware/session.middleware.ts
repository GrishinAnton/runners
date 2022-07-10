import { session } from 'telegraf';

export interface ISessionData {
    userListSkip: number
}

export const sessionMiddleware = session();
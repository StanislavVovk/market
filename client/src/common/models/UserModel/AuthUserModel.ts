import type { User } from '@firebase/auth'

export type UserModel = Pick<User, 'uid' | 'email' | 'displayName' | 'emailVerified' | 'photoURL'>

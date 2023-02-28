import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  deleteUser,
  User,
  AuthProvider, getAuth
} from '@firebase/auth'
import { FirebaseError } from '@firebase/util'
import { authErrorHandler } from 'common/errors/authErrors'
import { UserAuthData, UsernameData } from 'common/models/UserAuth/IUserCredential'
import { UserModel } from 'common/models/UserModel/AuthUserModel'

// todo modify Auth service (must extend DatabaseService)
export class AuthService {
  private readonly _auth: Auth

  constructor (auth: Auth) {
    this._auth = auth
  }

  async login ({
    email,
    password
  }: Record<keyof UserAuthData, string>): Promise<UserModel> {
    return await signInWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        } = user
        const userData: UserModel = {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        }
        return userData
      })
      .catch((error: FirebaseError) => {
        throw authErrorHandler(error)
      })
  }

  async signIn ({
    email,
    password
  }: Record<keyof UserAuthData, string>): Promise<UserModel> {
    return await createUserWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        } = user
        const userData: UserModel = {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        }
        return userData
      })
      .catch((error: FirebaseError) => {
        throw authErrorHandler(error)
      })
  }

  async signWithProvider (
    provider: AuthProvider): Promise<UserModel> {
    const auth = getAuth()
    return await signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        const {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        } = user
        const userData: UserModel = {
          uid,
          email,
          emailVerified,
          photoURL,
          displayName
        }
        return userData
      })
      .catch((error: FirebaseError) => {
        throw authErrorHandler(error)
      })
  }

  async changeUsername ({ username }: UsernameData) {
    const user = this._auth.currentUser as User
    return await updateProfile(user, { displayName: username })
      .then(() => username)
      .catch((error: FirebaseError) => {
        throw authErrorHandler(error)
      })
  }

  getCurrentUser () {
    return this._auth.currentUser as User
  }

  // TODO create admin panel in future
  async deleteUser (user: User) {
    return await deleteUser(user)
  }

  // todo create correct method from this
  authObserver () {
    return this._auth.onAuthStateChanged((user) => {
      if (user) {
        return user
      }
    })
  }

  async logOut () {
    return await signOut(this._auth)
      .catch((error): FirebaseError => {
        throw authErrorHandler(error)
      })
  }
}

// async deleteUser (uid: string) {
//   return await this._db.deleteSingleDoc(this._path, uid)
//     .then(() => AuthUserMessages.DELETED)
//     .catch((e) => {
//       throw e
//     })
// }

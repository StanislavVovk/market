import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from '@firebase/auth'
import { FirebaseError } from '@firebase/util'
import { authErrorHandler } from '../../common/errors/authErrors'
import { UserAuthData, UsernameData } from '../../common/models/UserModel/IUserCredential'

export class AuthService {
  private readonly _auth: Auth

  constructor (auth: Auth) {
    this._auth = auth
  }

  async login ({
    email,
    password
  }: Record<keyof UserAuthData, string>) {
    return await signInWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => userCredential.user)
      .catch((error: FirebaseError) => {
        throw authErrorHandler(error)
      })
  }

  async signIn ({
    email,
    password
  }: Record<keyof UserAuthData, string>) {
    return await createUserWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => userCredential.user)
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

  async logOut () {
    return await signOut(this._auth)
      .catch((error): FirebaseError => {
        throw authErrorHandler(error)
      })
  }
}

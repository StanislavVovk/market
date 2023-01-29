import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Auth } from '@firebase/auth';
import { FirebaseError } from '@firebase/util'
import { IUserLoginData } from '../../common/models/UserModel/IUserCredential';

export class AuthService {
  private readonly _auth: Auth;

  constructor (auth: Auth) {
    this._auth = auth
  }

  async login ({ email, password }: Record<keyof IUserLoginData, string>) {
    return await signInWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error: FirebaseError) => {
        throw error
      })
  }

  async signIn ({ email, password }: Record<keyof IUserLoginData, string>) {
    return await createUserWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => {
        return userCredential.user
      })
      .catch((error: FirebaseError) => {
        throw error
      })
  }

  async logOut () {
    return await signOut(this._auth)
      .catch((error): FirebaseError => {
        throw error
      })
  }
}

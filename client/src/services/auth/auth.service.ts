import type { User, Auth, AuthProvider } from '@firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  deleteUser,
  getAuth
} from '@firebase/auth'
import type { Firestore } from '@firebase/firestore'
import type { FirebaseError } from '@firebase/util'
import type { UserAuthData, UsernameData, UserModel } from 'common/common'
import { authErrorHandler } from 'common/errors/authErrors'
import { DatabaseService } from '../database/database.service'

export class AuthService extends DatabaseService<UserModel> {
  private readonly _auth: Auth

  constructor ({
    auth,
    db,
    collectionName
  }: { auth: Auth, db: Firestore, collectionName: string }) {
    super({
      db,
      collectionName
    })
    this._auth = auth
  }

  async login ({
    email,
    password
  }: Record<keyof UserAuthData, string>): Promise<UserModel> {
    return await signInWithEmailAndPassword(this._auth, email, password)
      .then((userCredential) => {
        return this.dataTransformer(userCredential.user)
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
        const user = this.dataTransformer(userCredential.user)
        void this.setDocumentData(user, user.uid)
        return user
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
        const user = this.dataTransformer(userCredential.user)
        void this.setDocumentData(user, user.uid)
        return user
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

  // todo create admin panel in future
  async deleteUser (user: User) {
    return await deleteUser(user)
  }

  async logOut () {
    return await signOut(this._auth)
      .catch((error): FirebaseError => {
        throw authErrorHandler(error)
      })
  }

  dataTransformer (user: User) {
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
  }
}

// async deleteUser (uid: string) {
//   return await this._db.deleteSingleDoc(this._path, uid)
//     .then(() => AuthUserMessages.DELETED)
//     .catch((e) => {
//       throw e
//     })
// }

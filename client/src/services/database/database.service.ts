import {
  getDocs,
  getDoc,
  collection,
  Firestore,
  setDoc,
  doc,
  deleteDoc,
  DocumentData,
  CollectionReference
} from '@firebase/firestore'

abstract class DatabaseService<T extends DocumentData> {
  protected readonly _collectionRef: CollectionReference
  private readonly _db: Firestore

  constructor ({
    db,
    collectionName
  }: { db: Firestore, collectionName: string }) {
    this._db = db
    this._collectionRef = collection(this._db, collectionName)
  }

  protected async getAllDocs () {
    return await getDocs(this._collectionRef)
      .then((data) => data.docs)
      .catch((e) => {
        throw e
      })
  }

  protected async getSingleDoc (id: string) {
    return await getDoc(doc(this._collectionRef, id))
      .then((data) => data.data())
      .catch((e) => {
        throw e
      })
  }

  protected async setDocumentData (data: T, uid: string) {
    return await setDoc(doc(this._collectionRef, uid), data)
      .then(() => true)
      .catch((e) => {
        throw e
      })
  }

  protected async deleteSingleDoc (id: string) {
    return await deleteDoc(doc(this._collectionRef, id))
      .then(() => true)
      .catch((e) => {
        throw e
      })
  }
}

export { DatabaseService }

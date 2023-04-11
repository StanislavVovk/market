import type {
  Firestore,
  DocumentData,
  CollectionReference,
  DocumentSnapshot,
  QueryDocumentSnapshot
} from '@firebase/firestore'
import { getDocs, getDoc, collection, setDoc, doc, deleteDoc } from '@firebase/firestore'

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

  protected async getAllDocs (): Promise<QueryDocumentSnapshot[]> {
    return await getDocs(this._collectionRef)
      .then((data) => data.docs)
      .catch((e) => {
        throw e
      })
  }

  protected async getSingleDoc (id: string): Promise<DocumentSnapshot> {
    return await getDoc(doc(this._collectionRef, id))
      .then((data) => data)
      .catch((e) => {
        throw e
      })
  }

  protected async setDocumentData (data: T, uid: string): Promise<boolean> {
    return await setDoc(doc(this._collectionRef, uid), data)
      .then(() => true)
      .catch((e) => {
        throw e
      })
  }

  protected async deleteSingleDoc (id: string): Promise<boolean> {
    return await deleteDoc(doc(this._collectionRef, id))
      .then(() => true)
      .catch((e) => {
        throw e
      })
  }
}

export { DatabaseService }

// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
export { auth, db, app }

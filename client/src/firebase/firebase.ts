// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './config'
import { getAuth } from 'firebase/auth'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
export { auth, db }

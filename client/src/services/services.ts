import { auth } from '../firebase/firebase'
import { AuthService } from './auth/auth.service'

const Auth = new AuthService(auth)

export { Auth }

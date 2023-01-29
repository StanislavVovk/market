import { AuthService } from './auth/auth.service';
import { auth } from '../firebase/firebase';

const Auth = new AuthService(auth)

export { Auth }

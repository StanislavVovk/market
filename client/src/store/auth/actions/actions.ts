import { AuthProvider } from '@firebase/auth'
import { FirebaseError } from '@firebase/util'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserAuthData, UsernameData } from 'common/models/UserAuth/IUserCredential'
import { AuthService } from 'services/auth/auth.service'
import { UserModel } from 'common/models/UserModel/AuthUserModel'
import { AuthActionTypes } from './AuthActionTypes'

const loginUser = createAsyncThunk<UserModel, UserAuthData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  AuthActionTypes.LOG_IN,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const {
      email,
      password
    } = userData

    return await Auth.login({
      email,
      password
    })
      .then((user) => user)
      .catch(err => rejectWithValue(err))
  }
)

const registerUser = createAsyncThunk<UserModel, UserAuthData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  AuthActionTypes.SIGN_UP,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const {
      email,
      password
    } = userData
    return await Auth.signIn({
      email,
      password
    }).then(user => user)
      .catch(err => rejectWithValue(err))
  }
)
const signWithProvider = createAsyncThunk<UserModel, AuthProvider, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  AuthActionTypes.SIGN_WITH_PROVIDER,
  async (provider, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    return await Auth.signWithProvider(provider)
      .then((user) => user)
      .catch((err) => rejectWithValue(err))
  }
)
const setUsername = createAsyncThunk<object, UsernameData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  AuthActionTypes.CHANGE_USERNAME,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const { username } = userData
    await Auth.changeUsername({ username })
      .catch((err) => rejectWithValue(err))
  }
)

const logoutUser = createAsyncThunk<object, object, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  AuthActionTypes.LOGOUT,
  async (_, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    await Auth.logOut()
      .catch((err) => rejectWithValue(err))
  }
)

export { loginUser, logoutUser, registerUser, setUsername, signWithProvider }

import { User } from '@firebase/auth'

import { FirebaseError } from '@firebase/util'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ActionTypes } from '../../common/constants/common'
import { UserAuthData, UsernameData } from '../../common/models/UserModel/IUserCredential'
import { AuthService } from '../../services/auth/auth.service'

const loginUser = createAsyncThunk<User, UserAuthData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.LOG_IN,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const {
      email,
      password
    } = userData
    try {
      const user: User = await Auth.login({
        email,
        password
      })
      return user
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const registerUser = createAsyncThunk<User, UserAuthData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.SIGN_UP,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const {
      email,
      password
    } = userData
    try {
      const user: User = await Auth.signIn({
        email,
        password
      })
      return user
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
const setUsername = createAsyncThunk<{}, UsernameData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.CHANGE_USERNAME,
  async (userData, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    const { username } = userData
    try {
      await Auth.changeUsername({ username })
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const logoutUser = createAsyncThunk<{}, {}, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.LOGOUT,
  async (_, {
    rejectWithValue,
    extra: { services: { Auth } }
  }) => {
    try {
      await Auth.logOut()
      return {}
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export { loginUser, logoutUser, registerUser, setUsername }

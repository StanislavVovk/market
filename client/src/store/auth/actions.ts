import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from '../../common/common';
import { IUserLoginData } from '../../common/models/UserModel/IUserCredential';
import { User } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { AuthService } from '../../services/auth/auth.service';

const loginUser = createAsyncThunk<User, IUserLoginData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.LOG_IN,
  async (userData, { rejectWithValue, extra: { services: { Auth } } }) => {
    const { email, password } = userData
    try {
      const user: User = await Auth.login({ email, password })
      return user
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const registerUser = createAsyncThunk<User, IUserLoginData, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.SIGN_UP,
  async (userData, { rejectWithValue, extra: { services: { Auth } } }) => {
    const { email, password } = userData
    try {
      const user: User = await Auth.signIn({ email, password })
      return user
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const logoutUser = createAsyncThunk<{}, {}, { rejectWithValue: FirebaseError, extra: { services: { Auth: AuthService } } }>(
  ActionTypes.LOGOUT,
  async (_, { rejectWithValue, extra: { services: { Auth } } }) => {
    try {
      await Auth.logOut()
      return {}
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export { loginUser, logoutUser, registerUser }

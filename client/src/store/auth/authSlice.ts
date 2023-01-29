import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';
import { loginUser, logoutUser, registerUser } from './actions'
import { FirebaseError } from '@firebase/util';
import { ActionTypes } from '../../common/constants/common';

interface IAuthInitialState {
  user: User | {}
  isLoading?: boolean
  error: FirebaseError | {}
}

const initialState: IAuthInitialState = {
  user: {},
  error: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [ActionTypes.CHECK_USER]: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          loginUser.fulfilled,
          registerUser.fulfilled,
          logoutUser.fulfilled
        ),
        (state, action) => {
          state.user = action.payload
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.rejected,
          registerUser.rejected,
          logoutUser.rejected
        ),
        (state, action) => {
          state.user = {}
          state.error = action.payload as FirebaseError
        }
      )
  }
})
export default authSlice.reducer

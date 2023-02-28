import { FirebaseError } from '@firebase/util'
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import { UserModel } from 'common/models/UserModel/AuthUserModel'
import { loginUser, logoutUser, registerUser } from './actions/actions'
import { AuthActionTypes } from './actions/AuthActionTypes'

interface IAuthInitialState {
  user: UserModel | undefined
  isLoading: boolean
  error: string | null
}

const initialState: IAuthInitialState = {
  user: undefined,
  error: null,
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [AuthActionTypes.CHECK_USER]: (state, { payload }: PayloadAction<UserModel>) => {
      state.user = payload
    },
    clearError: state => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.fulfilled, state => {
        state.user = undefined
        state.error = null
        state.isLoading = false
      })
      .addMatcher(
        isAnyOf(
          loginUser.fulfilled,
          registerUser.fulfilled
        ),
        (state, action) => {
          state.user = action.payload
          state.error = null
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.pending,
          registerUser.pending,
          logoutUser.pending
        ), (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.rejected,
          registerUser.rejected,
          logoutUser.rejected
        ),
        (state, { payload }) => {
          state.user = undefined
          // how it really works
          const errorWrapper = payload as FirebaseError
          state.error = errorWrapper.message
          state.isLoading = false
        }
      )
  }
})
export default authSlice.reducer

import { User } from '@firebase/auth'
import { FirebaseError } from '@firebase/util'
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import { ActionTypes } from '../../common/constants/common'
import { loginUser, logoutUser, registerUser } from './actions'

interface IAuthInitialState {
  user: User | {}
  isLoading?: boolean
  error: string | null
}

const initialState: IAuthInitialState = {
  user: {},
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [ActionTypes.CHECK_USER]: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
    },
    clearError: state => {
      state.error = null
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
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.rejected,
          registerUser.rejected,
          logoutUser.rejected
        ),
        (state, { payload }) => {
          state.user = {}
          // how it really works
          const errorWrapper = payload as FirebaseError
          state.error = errorWrapper.message
        }
      )
  }
})
export default authSlice.reducer

import { createSlice, isAnyOf, SerializedError } from '@reduxjs/toolkit'
import { getMenu } from './actions/actions'

interface IMenuSliceInitialState {
  menuData: any
  isLoading: boolean
  error: SerializedError | undefined
}

const initialState: IMenuSliceInitialState = {
  menuData: [],
  isLoading: false,
  error: undefined
}
export const menuSlice = createSlice({
  initialState,
  name: 'menuSlice',
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getMenu.fulfilled),
      (state, action) => {
        state.isLoading = false
        state.error = undefined
        state.menuData = action.payload
      })
      .addMatcher(isAnyOf(getMenu.pending), state => {
        state.isLoading = true
        state.menuData = undefined
        state.error = undefined
      })
      .addMatcher(isAnyOf(getMenu.rejected), (state, action) => {
        state.isLoading = false
        state.menuData = undefined
        state.error = action.error
      })
  }
})

export const menuActions = menuSlice.actions
export default menuSlice.reducer

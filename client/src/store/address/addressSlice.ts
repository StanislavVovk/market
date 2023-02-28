import { createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit'
import { AddressUserModel } from 'common/models/AddressUser/AddressUserModel'
import { getUserAddress, addUsersAddress } from './actions/actions'

export interface IAddress {
  buildingNumber: string
  streetName: string
  city: string
  state: string
  country: string
  zipCode: string
}

interface IAddressSliceInitialState {
  address: IAddress | undefined
  updateStatus: boolean
  isLoading: boolean | undefined
  error: any | undefined
}

const initialState: IAddressSliceInitialState = {
  address: undefined,
  updateStatus: false,
  isLoading: undefined,
  error: undefined
}
export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    changeUpdateStatus: (state) => {
      state.updateStatus = !state.updateStatus
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(getUserAddress.fulfilled, addUsersAddress.fulfilled),
        (state, action: PayloadAction<AddressUserModel>) => {
          if (action.payload) {
            const { userAddress } = action.payload
            state.address = userAddress
            state.error = undefined
            state.isLoading = false
          }
        }
      )
      .addMatcher(
        isAnyOf(getUserAddress.pending, addUsersAddress.pending),
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher((
        isAnyOf(getUserAddress.rejected, addUsersAddress.rejected)
      ),
      (state, action) => {
        state.error = action.payload
        state.address = undefined
        state.isLoading = false
      })
  }
})
export default addressSlice.reducer
export const addressActions = addressSlice.actions

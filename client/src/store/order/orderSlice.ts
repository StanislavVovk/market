import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import type { SerializedError } from '@reduxjs/toolkit'
import type { ICartItem } from 'common/models/CartModel/ICartItem'
import { placeOrder } from '../actions'
import type { IAddress } from '../address/addressSlice'

interface orderInitialState {
  address: IAddress | undefined
  paymentMethod: string | undefined
  order: ICartItem[] | undefined
  isLoading: boolean
  error: SerializedError | undefined
  modalVisibility: boolean | undefined
}

const initialState: orderInitialState = {
  address: undefined,
  paymentMethod: undefined,
  order: undefined,
  isLoading: false,
  error: undefined,
  modalVisibility: false
}
export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    changeModalVisibility: (state) => {
      state.modalVisibility = !state.modalVisibility
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(placeOrder.fulfilled),
      (state) => {
        state = initialState
      })
      .addMatcher(isAnyOf(placeOrder.pending),
        (state) => {
          state.isLoading = true
          state.address = undefined
          state.error = undefined
        }
      )
      .addMatcher(isAnyOf(placeOrder.rejected),
        (state, action) => {
          state.isLoading = false
          // state.error = action.error
          // todo create test for this
        }
      )
  }
}
)

export default orderSlice.reducer
export const orderActions = orderSlice.actions

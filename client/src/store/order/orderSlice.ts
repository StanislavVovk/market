import { FirebaseError } from '@firebase/util'
import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { ICartItem } from 'common/models/CartModel/ICartItem'
import { placeOrder } from '../actions'
import { IAddress } from '../address/addressSlice'

interface orderInitialState {
  address: IAddress | undefined
  paymentMethod: string | undefined
  order: ICartItem[] | undefined
  isLoading: boolean
  error: FirebaseError | undefined
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
    builder
      .addMatcher(
        isAnyOf(
          placeOrder.fulfilled
        ),
        (state) => {
          state = initialState
        })
      .addMatcher(
        isAnyOf(
          placeOrder.pending
        ),
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          placeOrder.rejected
        ),
        (state) => {
          state.isLoading = false
          // todo create error handler for this
          // learn how it's really works
        }
      )
  }
}
)

export default orderSlice.reducer
export const orderActions = orderSlice.actions

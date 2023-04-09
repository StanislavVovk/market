import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CartModel, ICartItem } from 'common/common'
import { addCartItem, decreaseCartItem, removeCartItem } from './actions/actions'
import { CartActionTypes } from './actions/cartActionTypes'

const initialState: CartModel = {
  cart: [],
  itemMap: {},
  totalEquality: 0,
  totalPrice: 0
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    [CartActionTypes.ADD_ITEM]: (state, { payload }: PayloadAction<ICartItem>) => addCartItem(state, payload),
    [CartActionTypes.CLEAR_CART]: () => initialState,
    [CartActionTypes.DECREASE_ITEM]: (state, { payload }: PayloadAction<ICartItem>) => decreaseCartItem(state, payload),
    [CartActionTypes.REMOVE_ITEM]: (state, { payload }: PayloadAction<ICartItem>) => removeCartItem(state, payload)
  }
}
)
export const cartActions = cartSlice.actions
export default cartSlice.reducer

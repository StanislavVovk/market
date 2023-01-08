import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../models/ICartItem';

interface ICartInitialState {
  cart: ICartItem[]
  itemMap: Record<number, number>
  totalPrice: number
}

const initialState: ICartInitialState = {
  cart: [],
  itemMap: {},
  totalPrice: 0
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addItem: (state, { payload }: PayloadAction<ICartItem>) => {
      // probably, there is a bit better method to create this
      // too difficult to refactor this
      if (payload.id in state.itemMap) {
        state.cart[state.itemMap[payload.id]].quantity++;
      } else {
        state.itemMap[payload.id] = state.cart.length;
        payload.quantity++;
        state.cart.push({ ...payload })
      }
      state.totalPrice += payload.price
    },
    clearCart: () => {
      return initialState;
    },
    decreaseItem: (state, { payload }: PayloadAction<ICartItem>) => {
      if (!(payload.id in state.itemMap)) {
        console.log(current(state))
        return state
      }
      state.cart[state.itemMap[payload.id]].quantity--;
      const deltaQuantity = state.cart[state.itemMap[payload.id]].quantity
      if (deltaQuantity === 0) {
        state.cart = [...state.cart].filter((cartItem) => cartItem.id !== payload.id)
        const index = state.itemMap[payload.id]
        delete state.itemMap[payload.id];
        for (let i = index; i < Object.keys(state.itemMap).length; i++) {
          state.itemMap[state.cart[i].id] -= 1
        }
      }
      state.totalPrice -= payload.price
    },
    removeItem: (state, action) => {
    }
  }
})

export default cartSlice.reducer

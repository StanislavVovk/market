import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  name: 'cart',
  initialState,
  reducers: {
    addItem: ({ cart, totalPrice, itemMap }, { payload }: PayloadAction<ICartItem>) => {
      // probably, there is a bit better method to create this
      // too difficult to refactor this
      if (payload.id in itemMap) {
        cart[itemMap[payload.id]].quantity++;
        // totalPrice += payload.quantity * payload.price
      } else {
        itemMap[payload.id] = cart.length;
        payload.quantity++;
        cart.push({ ...payload })
      }
    },
    clearCart: () => {
      return initialState;
    },
    decreaseItem: ({ cart, itemMap, totalPrice }, { payload }: PayloadAction<ICartItem>) => {
      const deltaQuantity = cart[payload.id].quantity--;
      if (deltaQuantity === 0) {
        delete itemMap[payload.id];
      }
    },
    removeItem: (state, action) => {
    }
  }
})

export default cartSlice.reducer

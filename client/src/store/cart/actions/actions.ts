import type { CartModel, ICartItem } from 'common/common'

export const addCartItem = (state: CartModel, payload: ICartItem) => {
  if (payload.id in state.itemMap) {
    state.cart[state.itemMap[payload.id]].quantity += 1
  } else {
    state.itemMap[payload.id] = state.cart.length
    payload.quantity += 1
    state.cart.push({ ...payload })
  }
  state.totalPrice += payload.price
  state.totalEquality += 1
}

export const decreaseCartItem = (state: CartModel, payload: ICartItem) => {
  if (!(payload.id in state.itemMap)) {
    return state
  }
  state.cart[state.itemMap[payload.id]].quantity -= 1
  const deltaQuantity = state.cart[state.itemMap[payload.id]].quantity
  if (deltaQuantity === 0) {
    filterCartItems(state, payload)
  }
  state.totalPrice -= payload.price
  state.totalEquality -= 1
}

export const removeCartItem = (state: CartModel, payload: ICartItem) => {
  const item = state.cart[state.itemMap[payload.id]]
  filterCartItems(state, payload)
  state.totalPrice -= item.quantity * item.price
  state.totalEquality -= item.quantity
}

const filterCartItems = (state: CartModel, payload: ICartItem) => {
  state.cart = [...state.cart].filter((cartItem) => cartItem.id !== payload.id)
  const index = state.itemMap[payload.id]
  delete state.itemMap[payload.id]
  for (let i = index; i < Object.keys(state.itemMap).length; i++) {
    state.itemMap[state.cart[i].id] -= 1
  }
}

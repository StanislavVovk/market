import authReducer from './auth/authSlice'
import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice'
import addressReducer from './address/addressSlice'
import orderReducer from './order/orderSlice'
import menuReducer from './menu/menuSlice'
import { Auth, Address, Order, Menu } from 'services/services'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  modalReducer,
  addressReducer,
  orderReducer,
  menuReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: {
        services: {
          Auth,
          Address,
          Order,
          Menu
        }
      }
    }
  })
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

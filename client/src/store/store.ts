import authReducer from './auth/authSlice'
import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice'
import { Auth } from '../services/services';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  modalReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: {
        services: {
          Auth
        }
      }
    }
  })
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

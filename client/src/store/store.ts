import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import authReducer from './auth/authSlice'
import { Auth } from '../services/services';

const rootReducer = combineReducers({
  cartReducer,
  authReducer
});

export const setupStore = () => {
  return configureStore({
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
  })
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

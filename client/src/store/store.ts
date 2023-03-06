import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSlice from './CartSlice/CartSlice';
import productsSlice from './ProductsSlice/ProductsSlice';
import userSlice from "./UserSlice/UserSlice";

export const rootReducer = combineReducers({
   cartSlice,
   productsSlice,
   userSlice,
});

export const setupStore = (initialState = {}) => {
   return configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
   });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSlice from './CartSlice/CartSlice';
import productsSlice from './ProductsSlice/ProductsSlice';
import userSlice from "./UserSlice/UserSlice";


const rootReducer = combineReducers({
   cartSlice,
   productsSlice,
   userSlice,
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

// типизируем стор и диспатчи
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
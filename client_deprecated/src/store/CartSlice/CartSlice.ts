import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzaCart } from "types/cart";
import { IState } from './types';

const initialState: IState = {
   cartItems: [],
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItemAction(state, action: PayloadAction<IPizzaCart>) {
         state.cartItems.push(action.payload);
      },
      deleteItemAction(state, action: PayloadAction<string>) {
         state.cartItems = state.cartItems.filter(elem => elem.id !== action.payload);
      },
      changeItemCountAction(state, action: PayloadAction<IPizzaCart>) {
         state.cartItems = state.cartItems.map(elem => {
            if (elem.id === action.payload.id) return action.payload;
            return elem;
         });
      },
      deleteAllAction(state) {
         state.cartItems = [];
      },
   },
});

export default cartSlice.reducer;

export const { addItemAction, deleteItemAction, changeItemCountAction, deleteAllAction } = cartSlice.actions;
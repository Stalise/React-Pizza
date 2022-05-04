import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { products } from 'api/api';
import { IPizza } from 'types/typesPizza';
import { IProductSlice } from './types';

const initialState: IProductSlice = {
   pizzas: [],
   status: 'ready',
   errorStatus: null,
   filter: 'all',
   sort: 'popular'
}

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      changeFilter(state, action: PayloadAction<string>) {
         state.filter = action.payload
      },
      changeSorter(state, action: PayloadAction<string>) {
         state.sort = action.payload
      }
   },
   extraReducers: {
      [String(products.getProducts.pending)]: (state: IProductSlice) => {
         state.status = 'pending'
      },
      [String(products.getProducts.fulfilled)]: (state: IProductSlice, action: PayloadAction<IPizza[]>) => {
         state.pizzas = action.payload
         state.status = 'ready'
      },
      [String(products.getProducts.rejected)]: (state: IProductSlice, action: PayloadAction<Error>) => {
         state.errorStatus = action.payload
         state.status = 'rejected'
      },
   }
})

export default productsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

import { getProductsThunk } from './actions';
import { IProductSlice, IProductsThunkPayload, IProductsFilterPayload } from './types';

const initialState: IProductSlice = {
   pizzas: [],
   status: 'ready',
   filter: 'all',
   sort: 'popular',
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      changeFilter(state, { payload }: IProductsFilterPayload) {
         state.filter = payload;
      },
      changeSorter(state, { payload }: IProductsFilterPayload) {
         state.sort = payload;
      },
   },
   extraReducers: builder => {
      builder
         .addCase(getProductsThunk.pending, state => {
            state.status = 'pending';
         })
         .addCase(getProductsThunk.fulfilled, (state, { payload }: IProductsThunkPayload) => {
            state.pizzas = payload;
            state.status = 'ready';
         });
   },
});

export default productsSlice.reducer;
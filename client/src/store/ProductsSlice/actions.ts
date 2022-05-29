import { createAsyncThunk } from "@reduxjs/toolkit";

import { products } from 'api/api';
import { IPizza } from "types/pizza";

export const getProductsThunk = createAsyncThunk(
   'products/getProductsThunk',
   async () => {
      const response: Array<IPizza> = await products.getProducts();

      return response;
   },
);
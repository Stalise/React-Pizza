import { pizzasMock } from './pizzas';
import { IProductsSlice } from "store/ProductsSlice/types";

export const productsSlice: IProductsSlice = {
   pizzas: pizzasMock,
   status: 'ready',
   filter: 'all',
   sort: 'popular',
};
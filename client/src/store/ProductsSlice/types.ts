import { IPizza } from "../../types/pizza";

export interface IProductsSlice {
   pizzas: IPizza[],
   status: string,
   filter: string,
   sort: string
};

/*=====================================================*/

export interface IProductsFilterPayload {
   payload: string,
}

export interface IProductsThunkPayload {
   payload: IPizza[],
}
import { IPizza } from "../../types/typesPizza";

export interface IProductSlice {
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
import { IPizza } from "../../types/typesPizza";

export interface IProductSlice {
   pizzas: IPizza[],
   status: string,
   errorStatus: null | Error,
   filter: string,
   sort: string
}
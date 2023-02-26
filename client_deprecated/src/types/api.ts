import { IPizza } from './pizza';

export interface IUserData {
   email: string,
   password: string
}

export interface IProductsResponse {
   products: IPizza[],
   message: string,
}
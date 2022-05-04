import { IPizzaCart } from "../types/typesPizzaCart";

interface IReturn {
   totalValue: number,
   totalCost: number
}

// подсчитываем при необходимости общее кол-во и сумму заказа в корзине
export const getTotalOrder = (cartItems: IPizzaCart[]): IReturn => {

   const totalValue = cartItems.reduce((accum, item) => {
      return accum += item.totalCount
   }, 0)

   const totalCost = cartItems.reduce((accum, item) => {
      return accum += item.totalCost
   }, 0)

   return { totalValue, totalCost }
}
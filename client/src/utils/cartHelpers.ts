import { price } from 'utils/pizzaHelpers';
import { addItemAction, deleteItemAction, changeItemCountAction } from "store/CartSlice/CartSlice";
import { IParams } from "components/MainPage/PizzaItem/PizzaItem";
import { IPizza } from "types/pizza";
import { IPizzaCart } from "types/cart";

interface IAddItemArguments {
   (
      pizza: IPizza,
      currentParams: IParams,
      currentId: string,
      dispatch: any,
   ): void,
}

interface ITotalCartReturn {
   totalValue: number,
   totalCost: number
}

/*============================================================================*/

export const addItem: IAddItemArguments = (pizza, currentParams, currentId, dispatch) => {
   const currentPrice = price(pizza, currentParams.size);

   const pizzaCartItem = {
      id: currentId,
      dough: currentParams.dough,
      size: currentParams.size,
      cost: currentPrice,
      img: './images/' + pizza.img,
      name: pizza.name,
      totalCount: 1,
      totalCost: currentPrice,
   };

   dispatch(addItemAction(pizzaCartItem));
};

export const removeItem = (id: string, dispatch: any) => {
   dispatch(deleteItemAction(id));
};

export const cartTotal = (cartItems: IPizzaCart[]): ITotalCartReturn => {

   const totalValue = cartItems.reduce((accum, item) => {
      return accum += item.totalCount;
   }, 0);

   const totalCost = cartItems.reduce((accum, item) => {
      return accum += item.totalCost;
   }, 0);

   return { totalValue, totalCost };
};

export const addItemCount = (pizza: IPizzaCart, dispatch: any) => {
   if (pizza.totalCount >= 1 && pizza.totalCount < 10) {
      const cloneItem = { ...pizza };

      cloneItem.totalCount += 1;
      cloneItem.totalCost = cloneItem.cost * cloneItem.totalCount;

      dispatch(changeItemCountAction(cloneItem));
   }
};

export const removeItemCount = (pizza: IPizzaCart, dispatch: any) => {
   if (pizza.totalCount > 1 && pizza.totalCount <= 10) {
      const cloneItem = { ...pizza };

      cloneItem.totalCount -= 1;
      cloneItem.totalCost = cloneItem.cost * cloneItem.totalCount;

      dispatch(changeItemCountAction(cloneItem));
   }
};
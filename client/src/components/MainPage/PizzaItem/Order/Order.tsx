import { useAppDispatch, useAppSelector } from "hooks/redux";
import { FC, useLayoutEffect, useState } from "react";

import s from "./Order.module.scss";
import { addItem, removeItem } from 'utils/cartActions';
import { price } from "utils/pizzaActions";
import { IPizza } from 'types/typesPizza';
import { IParams } from '../PizzaItem';

interface IState {
   pizza: IPizza,
   currentParams: IParams,
}

const Order: FC<IState> = ({ pizza, currentParams }) => {

   const [status, setStatus] = useState<boolean>(false);
   const { cartItems } = useAppSelector(state => state.cartSlice);
   const dispatch = useAppDispatch();

   const currentId = pizza.name + currentParams.size;

   const cartHandler = () => {
      if (status) {
         removeItem(currentId, dispatch);
      } else {
         addItem(pizza, currentParams, currentId, dispatch);
      }
   };

   useLayoutEffect(() => {
      for (const item of cartItems) {
         if (item.id === currentId) {
            setStatus(true);
            return;
         }
      }

      setStatus(false);
   }, [cartItems, currentId]);

   return (
      <div className={s.order}>
         <p className={s.orderPrice}>{price(pizza, currentParams.size)} <span>₽</span></p>

         <button
            onClick={cartHandler}
            className={`${s.orderButton} ${status ? s._active : ''}`}
         >
            {status ? 'Убрать' : 'Добавить'}
         </button>
      </div>
   );
};

export default Order;
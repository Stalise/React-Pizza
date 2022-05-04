import { useAppDispatch, useAppSelector } from "hooks/redux";
import { FC, useEffect, useState } from "react";

import { addItem, removeItem } from 'utils/cartActions';
import { IPizza } from 'types/typesPizza';
import { IParams } from './PizzaItem';

interface IState {
   pizza: IPizza,
   currentParams: IParams,
}

const Order: FC<IState> = ({ pizza, currentParams }) => {

   const [status, setStatus] = useState<boolean>(false)
   const { cartItems } = useAppSelector(state => state.cartSlice)
   const dispatch = useAppDispatch();

   const currentId = pizza.name + currentParams.size

   const cartHandler = () => {

      if (status === true) {
         removeItem(currentId, dispatch)
      } else {
         addItem(pizza, currentParams, currentId, dispatch)
      }
   }

   useEffect(() => {
      for (let item of cartItems) {
         if (item.id === currentId) {
            setStatus(true)
            return
         }
      }

      setStatus(false)
   }, [cartItems, currentParams.size])

   return (
      <button
         onClick={cartHandler}
         className={`pizza-item__order ${status && '_active'}`}
      >
         {status ? 'Убрать' : 'Добавить'}
      </button>
   );
}

export default Order;
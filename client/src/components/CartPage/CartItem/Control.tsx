import { FC } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartSlice } from "store/CartSlice/CartSlice";
import { addItemCount, removeItemCount } from "utils/cartActions"
import { IPizzaCart } from "types/typesPizzaCart";

interface IProps {
   pizza: IPizzaCart,
}

const Control: FC<IProps> = ({ pizza }) => {

   // let { cartItems }: { cartItems: IPizzaCart[] } = useAppSelector(state => state.cartSlice)
   const { deleteItemAction } = cartSlice.actions
   const dispatch = useAppDispatch()

   const deleteItemHandler = () => {
      dispatch(deleteItemAction(pizza.id))
   }

   return (
      <>
         <div className="cart-item__quantity">
            <div onClick={() => removeItemCount(pizza, dispatch)} className="cart-item__quantity-minus"></div>
            <div className="cart-item__quantity-total">
               <p className="cart-item__quantity-counter">{pizza.totalCount}</p>
               <input onChange={() => null} className="cart-item__quantity-input" value="1"></input>
            </div>
            <div onClick={() => addItemCount(pizza, dispatch)} className="cart-item__quantity-plus"></div>
         </div>
         <p className="cart-item__price">{pizza.totalCost} <span>₽</span></p>

         <div onClick={() => deleteItemHandler()} className="cart-item__delete"></div>
      </>
   );
}

export default Control;
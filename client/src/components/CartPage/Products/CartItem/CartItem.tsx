import { FC } from "react";

import s from "./CartItem.module.scss";
import { cartSlice } from "store/CartSlice/CartSlice";
import { useAppDispatch } from "hooks/redux";
import { IPizzaCart } from "types/typesPizzaCart";

import Counter from "./Counter/Counter";

interface IProps {
   pizza: IPizzaCart,
}

const CartItem: FC<IProps> = ({ pizza }) => {

   const { deleteItemAction } = cartSlice.actions;
   const dispatch = useAppDispatch();

   const deleteItemHandler = () => {
      dispatch(deleteItemAction(pizza.id));
   };

   return (
      <div className={s.item}>
         <div className={s.info}>
            <div className={s.infoImageContainer}>
               <img src={pizza.img} className={s.infoImage} alt="pizza" />
            </div>
            <div className={s.infoText}>
               <p className={s.infoTitle}>{pizza.name}</p>
               <p className={s.infoParameters}>{pizza.dough}, {pizza.size}</p>
            </div>
         </div>

         <Counter pizza={pizza} />

         <p className={s.price}>{pizza.totalCost} <span>₽</span></p>

         <div onClick={deleteItemHandler} className={s.delete}></div>
      </div>
   );
};

export default CartItem;
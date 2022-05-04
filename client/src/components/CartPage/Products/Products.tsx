import { FC } from "react";

import s from './Products.module.scss'
import { useAppSelector } from "hooks/redux";

import CartItem from "./CartItem/CartItem";

const Products: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)

   return (
      <div className={s.products}>
         {
            cartItems.map(item => {
               return (
                  <CartItem pizza={item} key={item.id} />
               )
            })
         }
      </div>
   );
}

export default Products;
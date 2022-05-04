import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

import CartItem from "./CartItem/CartItem";

const Products: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)

   return (
      <div className="main-cart__products">
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
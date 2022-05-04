import { FC } from "react";

import { IPizzaCart } from "types/typesPizzaCart";

import Control from "./Control";

interface IProps {
   pizza: IPizzaCart,
}

const CartItem: FC<IProps> = ({ pizza }) => {

   return (
      <div className="main-cart__item cart-item">
         <div className="cart-item__info">
            <div className="cart-item__picture">
               <img src={pizza.img} className="cart-item__picture" alt={'pizza'} />
            </div>
            <div className="cart-item__text">
               <p className="cart-item__name">{pizza.name}</p>
               <p className="cart-item__parameters">{pizza.dough}, {pizza.size}</p>
            </div>
         </div>

         <Control pizza={pizza} />
      </div>
   );
}

export default CartItem;
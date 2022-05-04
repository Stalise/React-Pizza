import { FC } from "react";

import './CartPage.scss';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartSlice } from "store/CartSlice/CartSlice";

import Products from "components/CartPage/Products";
import Total from "components/CartPage/Total";
import Empty from "components/CartPage/Empty";

const CartPage: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)
   const { deleteAllAction } = cartSlice.actions
   const dispatch = useAppDispatch()

   return (
      <div className="main-cart">
         {
            cartItems.length
               ?
               <div className="main-cart__content">
                  <div className="main-cart__top">
                     <div className="main-cart__title">
                        <img src="./images/cart-icon-big.png" className="main-cart__title-icon" alt='cart' />
                        <h1 className="main-cart__title-text">Корзина</h1>
                     </div>

                     <p onClick={() => dispatch(deleteAllAction())} className="main-cart__clear">Очистить корзину</p>
                  </div>

                  <Products />

                  <Total />
               </div>
               :
               <Empty />
         }
      </div>
   );
}

export default CartPage;
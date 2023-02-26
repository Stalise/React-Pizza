import { FC } from "react";

import s from './CartPage.module.scss';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartSlice } from "store/CartSlice/CartSlice";

import Products from "components/CartPage/Products/Products";
import Total from "components/CartPage/Total/Total";
import Empty from "components/CartPage/Empty/Empty";

const path = process.env.REACT_APP_GITHUB_PATH;

const CartPage: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice);
   const { deleteAllAction } = cartSlice.actions;
   const dispatch = useAppDispatch();

   return (
      <div className={s.main}>
         <div className={s.cart}>
            {
               cartItems.length
                  ?
                  <div className={s.content}>
                     <div className={s.contentTop}>
                        <div className={s.text}>
                           <img src={`${path}/images/cart-icon-big.png`} className={s.textIcon} alt="cart" />
                           <h1 className={s.textTitle}>Корзина</h1>
                        </div>

                        <p onClick={() => dispatch(deleteAllAction())} className={s.clear}>Очистить корзину</p>
                     </div>

                     <Products />

                     <Total />
                  </div>
                  :
                  <Empty />
            }
         </div>
      </div>
   );
};

export default CartPage;
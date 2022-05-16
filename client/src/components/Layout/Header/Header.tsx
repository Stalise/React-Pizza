import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import s from './Header.module.scss';
import { svgIcons } from "constants/svgIcons";
import { useAppSelector } from "hooks/redux";
import { getTotalOrder } from "utils/CartTotalOrder";

import AuthButton from './AuthButton/AuthButton';


const Header: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)

   const [totalItems, setTotalItems] = useState<number>(0)

   useEffect(() => {
      const { totalValue } = getTotalOrder(cartItems)
      setTotalItems(totalValue)
   }, [cartItems])

   return (
      <header className={s.header}>
         <AuthButton />

         <Link to="/" className={s.logo}>
            <img src='./images/pizza-peace.png' className={s.logoImage} alt="pizza-logo" />

            <div className={s.logoText}>
               <p className={s.logoTitle}>REACT PIZZA</p>
               <p className={s.logoSubtitle}>самая вкусная пицца</p>
            </div>
         </Link>

         <Link to={'/cart'} className={s.cart}>
            <img src={svgIcons.cart} className={s.cartIcon} alt="cart" />

            <p className={s.cartNumber}>{totalItems}</p>
         </Link>
      </header>
   );
}

export default Header;
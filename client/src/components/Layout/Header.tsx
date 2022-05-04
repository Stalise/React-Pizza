import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { svgIcons } from "constants/svgIcons";
import { useAppSelector } from "hooks/redux";
import { getTotalOrder } from "utils/CartTotalOrder";


const Header: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)
   const { autho } = useAppSelector(state => state.userSlice)

   const [totalItems, setTotalItems] = useState<number>(0)

   useEffect(() => {
      const { totalValue } = getTotalOrder(cartItems)
      setTotalItems(totalValue)
   }, [cartItems])

   return (
      <div className="header">
         <Link to={'/autho'} className="header__login">{autho === false ? 'Войти' : 'Выйти'}</Link>
         <Link to="/" className="header__logo">
            <img src='./images/pizza-peace.png' alt="pizza-logo" className="header__img" />

            <div className="header__logo-text">
               <p className="header__title">REACT PIZZA</p>
               <p className="header__subtitle">самая вкусная пицца</p>
            </div>
         </Link>
         <Link to={'/cart'} className="header__cart">
            <img src={svgIcons.cart} className="header__cart-icon" alt="cart" />

            <p className="header__cart-number">{totalItems}</p>
         </Link>
      </div>
   );
}

export default Header;
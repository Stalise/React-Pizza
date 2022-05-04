import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { cartTotal } from "utils/cartActions";

import Payment from "./Payment";

const Total: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)

   const { totalValue, totalCost } = useMemo(() => cartTotal(cartItems), [cartItems])

   return (
      <div className="main-cart__bottom">
         <div className="main-cart__info">
            <p className="main-cart__total-products">Всего товаров: {totalValue} шт.</p>
            <p className="main-cart__total-price">Сумма заказа {totalCost} ₽</p>
         </div>
         <div className="main-cart__buttons">
            <Link to="/" className="main-cart__back">Вернуться назад</Link>

            <Payment />
         </div>
      </div>
   );
}

export default Total;
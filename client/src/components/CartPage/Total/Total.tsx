import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import s from "./Total.module.scss";
import { useAppSelector } from "hooks/redux";
import { cartTotal } from "utils/cartActions";

import Payment from "../Payment/Payment";

const Total: FC = () => {

   const { cartItems } = useAppSelector(state => state.cartSlice)

   const { totalValue, totalCost } = useMemo(() => cartTotal(cartItems), [cartItems])

   return (
      <div className={s.total}>
         <div className={s.info}>
            <p className={s.infoQuantity}>Всего товаров: <span className={s.picked}>{totalValue} шт.</span></p>
            <p className={s.infoPrice}>Сумма заказа <span className={s.picked}>{totalCost} ₽</span></p>
         </div>
         <div className={s.buttons}>
            <Link to="/" className={s.back}>Вернуться назад</Link>

            <Payment />
         </div>
      </div>
   );
}

export default Total;
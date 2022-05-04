import { FC } from "react";

import s from "./Payment.module.scss"

const Payment: FC = () => {

   return (
      <button className={s.pay}>Оплатить заказ</button>
   );
}

export default Payment;
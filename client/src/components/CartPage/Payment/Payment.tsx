import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import s from "./Payment.module.scss";
import { defaultToast, toastOrder, messages } from "constants/toast";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { cartSlice } from "store/CartSlice/CartSlice";

const Payment: FC = () => {

   const { deleteAllAction } = cartSlice.actions
   const { isAuth } = useAppSelector(state => state.userSlice)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const makeOrder = () => {
      if (!isAuth) {
         toast.info(messages.orderFail, defaultToast)
         navigate('/auth')
      } else {
         toast.success(messages.orderSuccess, toastOrder)
         dispatch(deleteAllAction())
      }
   }

   return (
      <button onClick={makeOrder} className={s.pay}>Оформить заказ</button>
   );
}

export default Payment;
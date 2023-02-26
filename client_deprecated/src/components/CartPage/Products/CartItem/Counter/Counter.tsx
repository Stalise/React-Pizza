import { FC } from "react";

import s from "./Counter.module.scss";
import { useAppDispatch } from "hooks/redux";
import { addItemCount, removeItemCount } from "utils/cartHelpers";
import { IPizzaCart } from "types/cart";

interface IProps {
   pizza: IPizzaCart,
}

const Counter: FC<IProps> = ({ pizza }) => {

   const dispatch = useAppDispatch();

   return (
      <div className={s.counter}>
         <div onClick={() => removeItemCount(pizza, dispatch)} className={s.minus}></div>
         <div className={s.total}>
            <p className={s.totalResult}>{pizza.totalCount}</p>
         </div>
         <div onClick={() => addItemCount(pizza, dispatch)} className={s.plus}></div>
      </div>
   );
};

export default Counter;
import { FC, useState, memo } from "react";

import s from './PizzaItem.module.scss';
import { IPizza } from "types/pizza";

import Parameters from "./Parameters/Parameters";
import Order from "./Order/Order";

interface IProps {
   pizza: IPizza,
}

export interface IParams {
   dough: string,
   size: number,
}

const PizzaItem: FC<IProps> = ({ pizza }) => {

   const [currentParams, setCurrentParams] = useState<IParams>({
      dough: 'традиционное',
      size: 30,
   });

   return (
      <div className={s.pizza} data-testid="pizza-item">
         <div className={s.pictureWrapper}>
            <img className={s.picture} src={`./images/${pizza.img}`} alt="pizza" />
         </div>
         <div className={s.content}>
            <p className={s.title}>{pizza.name}</p>

            <Parameters
               pizza={pizza}
               currentParams={currentParams}
               setCurrentParams={setCurrentParams}
            />

            <Order
               pizza={pizza}
               currentParams={currentParams}
            />
         </div>
      </div>
   );
};

export default memo(PizzaItem);
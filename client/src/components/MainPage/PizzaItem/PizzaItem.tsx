import { FC, useState, memo } from "react";

import './PizzaItem.scss'
import { price } from "utils/pizzaActions"
import { IPizza } from "types/typesPizza";

import Parameters from "./Parameters";
import Order from "./Order"

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
   })

   return (
      <div className="main-pizza__item pizza-item">
         <div className="pizza-item__picture">
            <img src={'./images/' + pizza.img} alt='pizza' />
         </div>
         <div className="pizza-item__content">
            <p className="pizza-item__title">{pizza.name}</p>

            <Parameters
               pizza={pizza}
               currentParams={currentParams}
               setCurrentParams={setCurrentParams}
            />

            <div className="pizza-item__bottom">
               <p className="pizza-item__price">{price(pizza, currentParams.size)} <span>₽</span></p>

               <Order
                  pizza={pizza}
                  currentParams={currentParams}
               />
            </div>
         </div>
      </div>
   );
}

export default memo(PizzaItem);
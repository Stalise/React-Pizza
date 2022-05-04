import { FC } from "react";

import { IPizza } from "types/typesPizza";
import { IParams } from './PizzaItem';

interface IProps {
   pizza: IPizza,
   currentParams: IParams,
   setCurrentParams: (data: IParams) => void,
}

export enum doughNames {
   THIN = 'тонкое',
   TRADITIONAL = 'традиционное',
}

type DoughType = 'тонкое' | 'традиционное';

const Parameters: FC<IProps> = ({ pizza, currentParams, setCurrentParams }) => {

   const changeDough = (dough: DoughType, available: boolean) => {

      if (available === true) {
         setCurrentParams({
            ...currentParams,
            dough
         })
      }
   }

   const changeSize = (size: number) => {
      setCurrentParams({
         ...currentParams,
         size
      })
   }

   return (
      <div className="pizza-item__parameters">
         <ul className="pizza-item__dough">
            <li
               onClick={() => changeDough(doughNames.THIN, pizza.dough.thin)}
               className={`pizza-item__dough-item ${currentParams.dough === doughNames.THIN && '_active'} ${pizza.dough.thin === false && '_disable'}`}
            >
               {doughNames.THIN}
            </li>

            <li
               onClick={() => changeDough(doughNames.TRADITIONAL, pizza.dough.traditional)}
               className={`pizza-item__dough-item ${currentParams.dough === doughNames.TRADITIONAL && '_active'} ${pizza.dough.traditional === false && '_disable'}`}
            >
               {doughNames.TRADITIONAL}
            </li>
         </ul>

         <ul className="pizza-item__size">
            {Object.values(pizza.size).map(elem => {
               return (
                  <li
                     onClick={() => changeSize(elem)}
                     className={`pizza-item__size-item ${currentParams.size === elem && '_active'}`}
                     key={elem}
                  >
                     {`${elem} см.`}
                  </li>
               )
            })}
         </ul>
      </div>
   );
}

export default Parameters;
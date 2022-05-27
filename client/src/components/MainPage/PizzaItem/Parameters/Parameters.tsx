import { FC } from "react";

import s from "./Parameters.module.scss";
import { IPizza } from "types/typesPizza";
import { IParams } from '../PizzaItem';

interface IProps {
   pizza: IPizza,
   currentParams: IParams,
   setCurrentParams: (data: IParams) => void,
}

export enum doughNames {
   THIN = 'тонкое',
   TRADITIONAL = 'традиционное',
}

type DoughType = doughNames.THIN | doughNames.TRADITIONAL;

const Parameters: FC<IProps> = ({ pizza, currentParams, setCurrentParams }) => {

   const changeDough = (dough: DoughType, available: boolean) => {

      if (available === true) {
         setCurrentParams({
            ...currentParams,
            dough,
         });
      }
   };

   const changeSize = (size: number) => {
      setCurrentParams({
         ...currentParams,
         size,
      });
   };

   return (
      <div className={s.parameters}>
         <ul className={s.dough}>
            <li
               onClick={() => changeDough(doughNames.THIN, pizza.dough.thin)}
               className={`
                  ${s.doughItem}
                  ${currentParams.dough === doughNames.THIN ? s._active : ''}
                  ${pizza.dough.thin === false ? s._disable : ''}
               `}
            >
               {doughNames.THIN}
            </li>

            <li
               onClick={() => changeDough(doughNames.TRADITIONAL, pizza.dough.traditional)}
               className={`
                  ${s.doughItem}
                  ${currentParams.dough === doughNames.TRADITIONAL ? s._active : ''}
                  ${pizza.dough.traditional === false ? s._disable : ''}
               `}
            >
               {doughNames.TRADITIONAL}
            </li>
         </ul>

         <ul className={s.size}>
            {Object.values(pizza.size).map(elem => {
               return (
                  <li
                     onClick={() => changeSize(elem)}
                     className={`${s.sizeItem} ${currentParams.size === elem ? s._active : ''}`}
                     key={elem}
                  >
                     {`${elem} см.`}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Parameters;
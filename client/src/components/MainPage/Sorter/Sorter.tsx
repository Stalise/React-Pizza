import { FC, useEffect } from "react";

import s from './Sorter.module.scss';
import { useAppSelector } from "hooks/redux";
import { sorted } from "utils/pizzaActions";
import { IPizza } from "types/typesPizza";

import MySelect from './MySelect/MySelect'

interface IProps {
   setSortedPizza: (arr: IPizza[]) => void
}

const Sorter: FC<IProps> = ({ setSortedPizza }) => {

   const { pizzas, filter, sort } = useAppSelector(state => state.productsSlice)

   useEffect(() => {
      sorted(filter, sort, pizzas, setSortedPizza)
   }, [sort])

   return (
      <div className={s.sorter}>
         <span className={s.sorterTitle}>Сортировка по:</span>

         <MySelect />
      </div>
   );
}

export default Sorter;
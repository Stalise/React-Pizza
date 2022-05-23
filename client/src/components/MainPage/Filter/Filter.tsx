import { FC, useEffect } from "react";

import s from "./Filter.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { sorted } from 'utils/pizzaActions';
import { filterItems } from 'constants/filter';
import { productsSlice } from "store/ProductsSlice/ProductsSlice";
import { IPizza } from 'types/typesPizza';

interface IProps {
   setSortedPizza: (data: IPizza[]) => void,
}

const Filter: FC<IProps> = ({ setSortedPizza }) => {

   const { pizzas, filter, sort } = useAppSelector(state => state.productsSlice);
   const { changeFilter } = productsSlice.actions;
   const dispatch = useAppDispatch();

   const changeFilterHandler = (currentFilter: string) => {
      dispatch(changeFilter(currentFilter));
   };

   useEffect(() => {
      sorted(filter, sort, pizzas, setSortedPizza);
   }, [filter]);

   return (
      <div className={s.filter}>
         {filterItems.map(elem => {
            return (
               <button
                  type="button"
                  className={`${s.filterButton} ${filter === elem.type && s._active}`}
                  onClick={() => changeFilterHandler(elem.type)}
                  key={elem.type}
               >
                  {elem.title}
               </button>
            );
         })}
      </div>
   );
};

export default Filter;
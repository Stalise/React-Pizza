import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { sorted } from 'utils/pizzaActions';
import { filterItems } from 'constants/filter';
import { productsSlice } from "store/ProductsSlice/ProductsSlice";

interface IProps {
   setSortedPizza: ([]) => void,
}

const Filter: FC<IProps> = ({ setSortedPizza }) => {

   const { pizzas, filter, sort } = useAppSelector(state => state.productsSlice)
   const { changeFilter } = productsSlice.actions
   const dispatch = useAppDispatch()

   const changeFilterHandler = (currentFilter: string) => {
      dispatch(changeFilter(currentFilter))
   }

   useEffect(() => {
      sorted(filter, sort, pizzas, setSortedPizza)
   }, [filter])

   return (
      <div className="main-pizza__filter">
         {filterItems.map(elem => {
            return (
               <button
                  type="button"
                  className={`main-pizza__filter-button ${filter === elem.type && '_active'}`}
                  onClick={() => changeFilterHandler(elem.type)}
                  key={elem.type}
               >
                  {elem.title}
               </button>
            )
         })}
      </div>
   );
}

export default Filter;
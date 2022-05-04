import { FC, useEffect } from "react";
import Select from "react-select";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { productsSlice } from "store/ProductsSlice/ProductsSlice";
import { sorted } from "utils/pizzaActions";
import { selectOptions, IOptionsItem } from "constants/filter";
import { IPizza } from "types/typesPizza";

interface IProps {
   setSortedPizza: (arr: IPizza[]) => void
}

const Sorter: FC<IProps> = ({ setSortedPizza }) => {

   const { pizzas, filter, sort } = useAppSelector(state => state.productsSlice)
   const { changeSorter } = productsSlice.actions
   const dispatch = useAppDispatch()

   const selectHandler = (option: IOptionsItem | null) => {
      if (option !== null) {
         dispatch(changeSorter(option.value))
      }
   }

   useEffect(() => {
      sorted(filter, sort, pizzas, setSortedPizza)
   }, [sort])

   return (
      <div className="main-pizza__sort">
         <span className="main-pizza__sort-title">Сортировка по:</span>

         <Select
            options={selectOptions}
            defaultValue={selectOptions.filter(elem => elem.value === sort)}
            onChange={option => selectHandler(option)}
            isSearchable={false}
            className={'react-select'}
            classNamePrefix={'react-select'}
         />
      </div>
   );
}

export default Sorter;
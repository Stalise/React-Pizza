import { FC } from "react";
import Select from "react-select";

import './MySelect.scss'
import { productsSlice } from "store/ProductsSlice/ProductsSlice";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { selectOptions, IOptionsItem } from "constants/filter";

const MySelect: FC = () => {

   const { sort } = useAppSelector(state => state.productsSlice)
   const { changeSorter } = productsSlice.actions
   const dispatch = useAppDispatch()

   const selectHandler = (option: IOptionsItem | null) => {
      if (option !== null) {
         dispatch(changeSorter(option.value))
      }
   }

   return (
      <Select
         options={selectOptions}
         defaultValue={selectOptions.filter(elem => elem.value === sort)}
         onChange={option => selectHandler(option)}
         isSearchable={false}
         className={"sorter-select"}
         classNamePrefix={"sorter-select"}
      />
   );
}

export default MySelect;
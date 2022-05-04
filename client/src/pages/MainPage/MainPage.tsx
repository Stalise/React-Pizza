import { FC, useState } from 'react';

import './MainPage.scss';
import { useAppSelector } from 'hooks/redux';
import { IPizza } from 'types/typesPizza';
import { IProductSlice } from 'store/ProductsSlice/types';

import PizzaItem from 'components/MainPage/PizzaItem/PizzaItem';
import Filter from 'components/MainPage/Filter';
import Spinner from 'components/Common/Loader/Loader';
import Sorter from 'components/MainPage/Sorter';

const MainPage: FC = () => {

   const { status, errorStatus }: IProductSlice = useAppSelector(state => state.productsSlice)
   // капия исходного списка пицц, чтобы делать различные манипуляции с сортировками
   const [sortedPizza, setSortedPizza] = useState<IPizza[]>([])

   return (
      <div className="main__pizza main-pizza">
         {errorStatus && <h2>{errorStatus.message}</h2>}

         {status === 'pending' && <Spinner />}

         {status === 'ready' &&
            <>
               <div className="main-pizza__actions">
                  <Filter setSortedPizza={setSortedPizza} />

                  <Sorter setSortedPizza={setSortedPizza} />
               </div>

               <p className="main-pizza__title">Пицца</p>

               <div className="main-pizza__content">
                  {sortedPizza.map((item) => {
                     return <PizzaItem pizza={item} key={item.name} />
                  })}
               </div>
            </>
         }
      </div>
   );
}

export default MainPage;
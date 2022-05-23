import { FC, useState } from 'react';

import s from './MainPage.module.scss';
import { useAppSelector } from 'hooks/redux';
import { IPizza } from 'types/typesPizza';

import PizzaItem from 'components/MainPage/PizzaItem/PizzaItem';
import Filter from 'components/MainPage/Filter/Filter';
import Loader from 'components/Common/Loader/Loader';
import Sorter from 'components/MainPage/Sorter/Sorter';

const MainPage: FC = () => {

   const { status, errorStatus } = useAppSelector(state => state.productsSlice);
   // капия исходного списка пицц, чтобы делать различные манипуляции с сортировками
   const [sortedPizza, setSortedPizza] = useState<IPizza[]>([]);

   return (
      <div className={s.main}>
         <div className={s.products}>
            {errorStatus && <p>{errorStatus.message}</p>}

            {status === 'pending' && <Loader />}

            {status === 'ready' &&
               <>
                  <div className={s.productsActions}>
                     <Filter setSortedPizza={setSortedPizza} />

                     <Sorter setSortedPizza={setSortedPizza} />
                  </div>

                  <p className={s.productsTitle}>Пицца</p>

                  <div className={s.productsContent}>
                     {sortedPizza.map(item => {
                        return <PizzaItem pizza={item} key={item.name} />;
                     })}
                  </div>
               </>
            }
         </div>
      </div>
   );
};

export default MainPage;
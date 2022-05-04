import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';
import { products } from 'api/api';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { IPizza } from 'types/typesPizza';

import Header from 'components/Layout/Header';

const Layout: FC = () => {

   const { pizzas }: { pizzas: IPizza[] } = useAppSelector(state => state.productsSlice)
   const dispatch = useAppDispatch()

   // при отрисовке outlet компонента проверять, получили ли уже пиццы с сервера.
   useEffect(() => {
      if (pizzas.length === 0) {
         dispatch(products.getProducts())
      }
   }, [])

   return (
      <div className='wrapper'>
         <Header />

         <div className="main">
            <Outlet />
         </div>
      </div>
   );
}

export default Layout;
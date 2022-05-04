import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss'
import { products } from 'api/api';
import { useAppDispatch } from "hooks/redux";

import Header from 'components/Layout/Header/Header';

const Layout: FC = () => {

   const dispatch = useAppDispatch()

   // при отрисовке outlet компонента проверять, получили ли уже пиццы с сервера.
   useEffect(() => {
      dispatch(products.getProducts())
   }, [])

   return (
      <div className={styles.wrapper}>
         <Header />

         <Outlet />
      </div>
   );
}

export default Layout;
import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { checkAuthThunk } from 'store/UserSlice/actions';
import { getProductsThunk } from 'store/ProductsSlice/actions';

import Header from 'components/Common/Header/Header';
import Loader from 'components/Common/Loader/Loader';

const Layout: FC = () => {

   const { status } = useAppSelector(state => state.userSlice);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(checkAuthThunk());
      dispatch(getProductsThunk());
   }, []);

   return (
      <div className={styles.wrapper}>
         {status === 'pending'
            ?
            <Loader />
            :
            <>
               <Header />
               <Outlet />
            </>
         }

         <ToastContainer limit={3} />
      </div>
   );
};

export default Layout;
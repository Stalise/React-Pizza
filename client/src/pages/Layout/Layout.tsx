import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Layout.module.scss'
import { products } from 'api/api';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { checkAuthThunk } from 'store/UserSlice/actions';

import Header from 'components/Layout/Header/Header';
import Loader from 'components/Common/Loader/Loader';

const Layout: FC = () => {

   const { status } = useAppSelector(state => state.userSlice)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(checkAuthThunk())
      dispatch(products.getProducts())
   }, [])

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

         <ToastContainer />
      </div>
   );
}

export default Layout;
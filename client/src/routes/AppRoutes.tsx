import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';

import Layout from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import CartPage from 'pages/CartPage/CartPage';
import AuthorizationPage from 'pages/AuthorizationPage/AuthorizationPage';


const AppRoutes: FC = () => {

   const { autho } = useAppSelector(state => state.userSlice)

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
            {!autho && <Route path='/autho' element={<AuthorizationPage />} />}
            <Route path='*' element={<MainPage />} />
         </Route>
      </Routes >
   );
}

export default AppRoutes;
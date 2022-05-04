import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralLayout from '../pages/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import CartPage from '../pages/CartPage/CartPage';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage';
import { useAppSelector } from '../hooks/redux';

const AppRoutes: FC = () => {

   const { autho } = useAppSelector(state => state.userSlice)

   return (
      <Routes>
         <Route path='/' element={<GeneralLayout />}>
            <Route index element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<MainPage />} />
         </Route>

         {autho === false ? <Route path='/autho' element={<AuthorizationPage />} /> : null}
      </Routes >
   );
}

export default AppRoutes;
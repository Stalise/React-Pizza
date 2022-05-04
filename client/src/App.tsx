import { FC, useEffect } from 'react';

import AppRoutes from './routes/AppRoutes';
import { user } from './api/api';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/UserSlice/UserSlice';

import Loader from './components/Common/Loader/Loader';

const App: FC = () => {

   const { status } = useAppSelector(state => state.userSlice)
   const { changeAutho } = userSlice.actions
   const dispatch = useAppDispatch()

   // проверка авторизован пользователь, или нет
   useEffect(() => {
      (async () => {
         const check = await user.checkAuthorize()
         dispatch(changeAutho(check))
      })()
   }, [])

   return (
      <>
         {status === 'ready' ? <AppRoutes /> : <Loader />}
      </>
   );
}

export default App;

import { FC } from "react";

import s from './AuthError.module.scss';
import { userSlice } from "store/UserSlice/UserSlice";
import { useAppDispatch } from "hooks/redux";

const AuthError: FC = () => {

   const { changeAutho } = userSlice.actions
   const dispatch = useAppDispatch()

   const authHandler = () => {
      dispatch(changeAutho({ isAuth: false, status: 'ready' }))
   }

   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <div className={s.icon}></div>
            <p className={s.title}>Ooops! Something went wrong.</p>
            <p className={s.text}>Please try again later</p>
            <button onClick={authHandler} className={s['back-button']} type="button">Back to shop</button>
         </div>
      </div>
   );
}

export default AuthError;
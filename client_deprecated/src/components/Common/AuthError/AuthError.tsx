import { FC } from "react";

import s from './AuthError.module.scss';
import { changeAuthoAction } from "store/UserSlice/UserSlice";
import { useAppDispatch } from "hooks/redux";

const AuthError: FC = () => {

   const dispatch = useAppDispatch();

   const authHandler = () => {
      dispatch(changeAuthoAction({ isAuth: false, status: 'ready' }));
   };

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
};

export default AuthError;
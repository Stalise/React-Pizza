import { FC } from "react";
import { Link } from "react-router-dom";

import s from './AuthButton.module.scss';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { logoutUserThunk } from 'store/UserSlice/actions';

const AuthButton: FC = () => {

   const { isAuth } = useAppSelector(state => state.userSlice)
   const dispatch = useAppDispatch()

   const logoutHandler = () => {
      if (isAuth === true) {
         dispatch(logoutUserThunk())
      }
   }

   return (
      <Link to={'/auth'} onClick={logoutHandler} className={s.login}>
         {isAuth === false ? 'Войти' : 'Выйти'}
      </Link>
   );
}

export default AuthButton;
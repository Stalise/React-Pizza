import { FC } from "react";
import { Link } from "react-router-dom";

import s from './AuthButton.module.scss';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { logoutUserThunk } from 'store/UserSlice/actions';

const AuthButton: FC = () => {

   const { autho } = useAppSelector(state => state.userSlice)
   const dispatch = useAppDispatch()

   const logoutHandler = () => {
      if (autho === true) {
         dispatch(logoutUserThunk())
      }
   }

   return (
      <Link to={'/autho'} onClick={logoutHandler} className={s.login}>
         {autho === false ? 'Войти' : 'Выйти'}
      </Link>
   );
}

export default AuthButton;
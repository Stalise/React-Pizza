import { FC } from "react";
import { useForm } from 'react-hook-form';

import s from './AuthorizationForm.module.scss';
import { authUserThunk } from 'store/UserSlice/actions';
import { useAppDispatch, useAppSelector } from "hooks/redux";

interface IProps {
   tabStatus: boolean,
}

interface IFormData {
   email: string,
   password: string
}

const AuthorizationForm: FC<IProps> = ({ tabStatus }) => {

   const { status } = useAppSelector(state => state.userSlice)
   const dispatch = useAppDispatch()

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<IFormData>({ mode: "onBlur" });


   const onSubmit = async (data: IFormData) => {
      dispatch(authUserThunk(data))
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={`${s.form} ${tabStatus && s._active}`}>

         <label className={s.container}>
            Email
            <input
               {...register('email', {
                  required: true,
                  pattern: {
                     value: /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,
                     message: "Некорректный email.",
                  },
               })}
               className={s.field} type="email" placeholder="Your email"
            />
            <p className={`${s.error} ${errors.email && s._active}`}>
               {errors?.email?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <label className={s.container}>
            Password
            <input
               {...register('password', {
                  required: true,
                  pattern: { value: /^[a-zA-Z0-9]+$/, message: "Некорректные символы." },
                  minLength: { value: 6, message: "Минимум 6 символов" },
                  maxLength: { value: 10, message: "Максимум 10 символов" }
               })}
               className={s.field} type="password" placeholder="Your password"
            />
            <p className={`${s.error} ${errors.password && s._active}`}>
               {errors?.password?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <button className={`${s.submit} ${status === 'auth' && s._auth}`} type='submit'>AUTHORIZATION</button>
      </form>
   );
}

export default AuthorizationForm;
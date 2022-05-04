import { FC } from "react";
import { useForm } from 'react-hook-form';

import { user } from "api/api";
import { useAppDispatch } from "hooks/redux";
import { userSlice } from "store/UserSlice/UserSlice";

interface IProps {
   tabsState: boolean,
}

enum classNames {
   form = 'entry__form-register form-register',
   _active = ' _active',
   formError = 'form-register__error'
}

interface IFormData {
   email: string,
   password: string
}

const RegisterForm: FC<IProps> = ({ tabsState }) => {

   const dispatch = useAppDispatch()

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<IFormData>({ mode: "onChange" });

   const onSubmit = async (data: IFormData) => {

      await dispatch(user.createUser(data))

      // меняем стейт в userSlice, чтобы показать приложению что пользователь авторизован
      // if (request.data === Boolean) { dispatch(changeAutho(request.payload)) }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={tabsState ? classNames.form + classNames._active : classNames.form}>
         <label className='form-register__label'>
            Email
            <input
               {...register('email', {
                  required: true,
                  pattern: {
                     value: /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,
                     message: "Некорректный email."
                  },
               })}
               className='form-register__input' type="text" placeholder="Example: example22@gmail.com"
            />
            <p className={errors?.email ? classNames.formError + classNames._active : classNames.formError}>
               {errors?.email?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <label className='form-register__label'>
            Password
            <input
               {...register('password', {
                  required: true,
                  pattern: { value: /^[a-zA-Z0-9]+$/, message: "Некорректные символы." },
                  minLength: { value: 6, message: "Минимум 6 символов" },
                  maxLength: { value: 10, message: "Максимум 10 символов" }
               })}
               className='form-register__input' type="password" placeholder="Example: bend12AW"
            />
            <p className={errors?.password ? classNames.formError + classNames._active : classNames.formError}>
               {errors?.password?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <button type='submit' className="form-register__button-submit">REGISTRATION</button>
      </form>
   );
}

export default RegisterForm;
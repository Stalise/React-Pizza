import { FC } from "react";
import { useForm } from 'react-hook-form';

import s from './AuthorizationForm.module.scss';

interface IProps {
   tabStatus: boolean,
}

interface IFormData {
   email: string,
   password: string
}

const AuthorizationForm: FC<IProps> = ({ tabStatus }) => {

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<IFormData>({ mode: "onChange" });


   const onSubmit = async (data: IFormData) => {

      try {
         const authorizationRequest = await fetch('http://localhost:8000/api/user/autho', {
            method: 'POST',
            headers: {
               // 'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0aXMua296bG92QG1haWwucnUiLCJpYXQiOjE2NDM0Njk0NzAsImV4cCI6MTY0MzQ2OTQ3MH0.-DViH6OFN_tXSbhPUiSq012QD5kZ8JGGg5t4uyu8qsE",
               'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(data)
         })
         console.log(document.cookie)

         const getResponse = await authorizationRequest.json()

         // если ответ не со статусом 200, то выкидываем ошибку с сообщением из ответа
         if (authorizationRequest.status !== 200) {
            throw new Error(getResponse.message)
         }

         // console.log(getResponse)

      } catch (err) {
         alert((err as Error).message)
      }
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
               className={s.field} type="text" placeholder="Your email"
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

         <button type='submit' className={s.submit} >AUTHORIZATION</button>
      </form>
   );
}

export default AuthorizationForm;
import { FC } from "react";
import { useForm } from 'react-hook-form';


interface IProps {
   tabsState: boolean,
}

enum classNames {
   form = "entry__form-authorize form-authorize",
   _active = ' _active',
   formError = 'form-authorize__error'
}

interface IFormData {
   email: string,
   password: string
}

const AuthorizationForm: FC<IProps> = ({ tabsState }) => {

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
      <form onSubmit={handleSubmit(onSubmit)} className={tabsState ? classNames.form + classNames._active : classNames.form}>
         <label className='form-authorize__label'>
            Email
            <input
               {...register('email', {
                  required: true,
                  pattern: {
                     value: /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,
                     message: "Некорректный email.",
                  },
               })}
               className='form-authorize__input' type="text" placeholder="Your email"
            />
            <p className={errors?.email ? classNames.formError + classNames._active : classNames.formError}>
               {errors?.email?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <label className='form-authorize__label'>
            Password
            <input
               {...register('password', {
                  required: true,
                  pattern: { value: /^[a-zA-Z0-9]+$/, message: "Некорректные символы." },
                  minLength: { value: 6, message: "Минимум 6 символов" },
                  maxLength: { value: 10, message: "Максимум 10 символов" }
               })}
               className='form-authorize__input' type="password" placeholder="Your password"
            />
            <p className={errors?.password ? classNames.formError + classNames._active : classNames.formError}>
               {errors?.password?.message || 'Обязательное поле для ввода.'}
            </p>
         </label>

         <button type='submit' className="form-authorize__button-submit" >AUTHORIZATION</button>
      </form>
   );
}

export default AuthorizationForm;
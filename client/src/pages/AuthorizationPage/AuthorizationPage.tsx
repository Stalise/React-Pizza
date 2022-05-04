import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './AuthorizationPage.module.scss';
import { KeyType } from 'types/keyType';

import AuthorizationForm from 'components/AuthorizationPage/AuthorizationForm/AuthorizationForm';
import RegisterForm from 'components/AuthorizationPage/RegisterForm/RegisterForm';

interface ITabs extends KeyType<boolean> {
   register: boolean,
   auth: boolean,
}

const AuthorizationPage: FC = () => {

   // document.cookie = "user=John; expires: 30; secure";

   // const [loading, setLoading] = useState(false)
   const [tabsState, tabsStateHandler] = useState<ITabs>({
      register: false,
      auth: false,
   })

   const tabsHandler = (tab: string): void => {
      const tabsFake: ITabs = { register: false, auth: false }
      tabsFake[tab] = true

      tabsStateHandler(tabsFake)
   }

   useEffect(() => {
      tabsStateHandler({ ...tabsState, register: true })
   }, [])

   return (
      <div className={s.main}>
         <div className={s.entry}>
            <div className={s.entryContainer}>
               <div className={s.introduction}>
                  <Link to={'/'}>
                     <div className={s.logo}>
                        <div className={s.logoImageContainer}>
                           <img src="./images/pizza-peace.png" className={s.logoImage} alt="logo-pizza" />
                        </div>
                        <p className={s.logoText}>React Pizza</p>
                     </div>
                  </Link>
               </div>

               <div className={s.buttons}>
                  <button className={s.register} onClick={() => tabsHandler('register')}>Register</button>
                  <button className={s["sign-in"]} onClick={() => tabsHandler('auth')}>Sign in</button>
               </div>

               <div className={s.forms}>
                  <RegisterForm
                     tabStatus={tabsState.register}
                  />

                  <AuthorizationForm
                     tabStatus={tabsState.auth}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default AuthorizationPage;
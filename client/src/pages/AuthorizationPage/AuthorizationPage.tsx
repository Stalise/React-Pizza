import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './AuthorizationPage.scss';

import AuthorizationForm from 'components/AuthorizationPage/AuthorizationForm';
import RegisterForm from 'components/AuthorizationPage/RegisterForm';

interface ITabs {
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

   // логика кнопок-табов для переключения между регистр и авториз
   const tabsHandler = (elem: string): void => {
      let tabsFake = { ...tabsState }
      let tabsKeys = Object.keys(tabsFake);

      tabsKeys.forEach((e: string) => {
         if (e === elem) {
            tabsFake[e as keyof typeof tabsFake] = true
         } else {
            tabsFake[e as keyof typeof tabsFake] = false
         }
      })

      tabsStateHandler({ ...tabsFake })
   }

   useEffect(() => {
      tabsStateHandler({ ...tabsState, register: true })
   }, [])

   return (
      <div className='wrapper'>
         <div className="entry">
            <div className="entry__container">
               <div className="entry__introduction entry-introduction">
                  <Link to={'/'}>
                     <div className="entry-introduction__logo">
                        <div className="entry-introduction__logo-icon">
                           <img src="./images/pizza-peace.png" className='entry-introduction__logo-img' alt="logo-pizza" />
                        </div>
                        <p className="entry-introduction__logo-text">React Pizza</p>
                     </div>
                  </Link>
               </div>

               <div className="entry__buttons">
                  <button className="entry__register" onClick={() => tabsHandler('register')}>Register</button>
                  <button className="entry__sign-in" onClick={() => tabsHandler('auth')}>Sign in</button>
               </div>

               <div className="entry__form-container">
                  <RegisterForm
                     tabsState={tabsState.register}
                  />

                  <AuthorizationForm
                     tabsState={tabsState.auth}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default AuthorizationPage;
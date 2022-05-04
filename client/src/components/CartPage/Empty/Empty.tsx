import { FC } from "react";

import s from "./Empty.module.scss";

const Empty: FC = () => {

   return (
      <div className={s.empty}>
         <div className={s.text}>
            <p className={s.title}>Корзина пустая <span>🙁</span></p>
            <p className={s.subtle}>Вероятнее всего, вы не добавили еще товар в корзину.</p>
            <p className={s.subtle}>Для того чтобы это сделать, перейдите на главную страницу</p>
         </div>
         <div className={s.imageContainer}>
            <img src="./images/cart-person.png" className={s.image} alt={'cart-person'} />
         </div>
      </div>
   );
}

export default Empty;
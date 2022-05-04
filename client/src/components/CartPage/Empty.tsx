import { FC } from "react";

const Empty: FC = () => {

   return (
      <div className="main-cart__empty">
         <div className="main-cart__empty-text">
            <p className="main-cart__empty-title">Корзина пустая <span>🙁</span></p>
            <p className="main-cart__empty-subtle">Вероятнее всего, вы не добавили еще товар в корзину.</p>
            <p className="main-cart__empty-subtle">Для того чтобы это сделать, перейдите на главную страницу</p>
         </div>
         <div className="main-cart__empty-picture">
            <img src="./images/cart-person.png" alt={'cart-person'} />
         </div>
      </div>
   );
}

export default Empty;
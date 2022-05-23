import { FC } from 'react';

import s from './Loader.module.scss';

const Loader: FC = () => {

   return (
      <div className={s.container}>
         <img src="./images/pizza_loader.gif" className={s.image} alt="pizza_loader" />
      </div>
   );
};

export default Loader;
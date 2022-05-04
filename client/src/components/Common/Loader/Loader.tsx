import { FC } from 'react';

import './Loader.scss';

const Loader: FC = () => {

   return (
      <div className="spinner__container">
         <img src="./images/pizza_loader.gif" className="spinner__gif" alt="pizza_loader" />
      </div>
   );
}

export default Loader;
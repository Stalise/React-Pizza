import { FC, ReactChild } from 'react';

import s from './Modal.module.scss';

interface IProps {
   children: ReactChild | any,
   isModal: boolean,
   setIsModal: (data: boolean) => void
}

const Modal: FC<IProps> = ({ children, isModal, setIsModal }) => {

   if (isModal === true) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "visible";
   }

   const closeModal = () => {
      setIsModal(!isModal);
   };

   const closeModalContainer = (e: any) => {
      e.stopPropagation();
      if (e.target.id === 'ModalContainer') {
         setIsModal(!isModal);
      }
   };

   return (
      <div onClick={() => closeModal()} className={`${s.modalWrapper} ${isModal && s._active}`}>
         <div id="div" onClick={e => closeModalContainer(e)}>
            {children}
         </div>
      </div>
   );
};

export default Modal;
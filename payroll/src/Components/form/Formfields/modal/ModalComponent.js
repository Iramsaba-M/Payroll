
import React from 'react';
import ModalStyles from './ModalStyles';

const ModalComponent = ({ isOpen, onClose, config }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    
    isOpen && (
      <div className=''>
      <div className={ModalStyles.MainDiv}>
        <div className={ModalStyles.ModalBody}>
          <div className={ModalStyles.Header}>
            {config.map((item, index) => (
              <h2 key={index} className={ModalStyles[item.css]}>
                {item.label}
              </h2>
            ))}
            <button className={ModalStyles.CrossButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  );
};

export default ModalComponent;
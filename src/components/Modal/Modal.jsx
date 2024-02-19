import styles from './Modal.module.css'


const Modal = ({close,children}) => {
  return (
    <div className={styles.modal}>
     <button onClick={close}>X</button>
      {children}
    </div>
  );
};

export default Modal;

import styles from './Alert.module.css';

const Alert = ({ variant, message }) => {
  return (
    <div className={`${styles.alert} ${styles[variant]}`}>
      {message}

    </div>
  );
}

export default Alert;
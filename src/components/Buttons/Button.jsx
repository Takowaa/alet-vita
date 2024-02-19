
import styles from './Button.module.css';

const Button = ({ variant, text, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  );
}

export default Button;
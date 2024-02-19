import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['button']}>
      <span className="button-label">Welcome to Button!</span>
    </button>
  );
}

export default Button;

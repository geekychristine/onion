import clsx from 'clsx';
import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  active: boolean;
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}

export function Button({ children, title, active, ...rest }: ButtonProps) {
  return (
    <button className={clsx(styles['button'], active)} {...rest}>
      <span className="button-label">{title}</span>
      {children}
    </button>
  );
}

export default Button;

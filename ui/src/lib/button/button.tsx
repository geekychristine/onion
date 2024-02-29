import clsx from 'clsx';
import styles from './button.module.css';

export interface ButtonProps {
  active: boolean;
  children: React.ReactNode;
  loading: boolean;
  icon: {
    name: string;
    position: 'before' | 'after';
    size: 'sm' | 'md' | 'lg';
  };
  reference: React.RefObject<HTMLButtonElement>;
  size: 'sm' | 'md' | 'lg';
  variant: 'fill' | 'outline' | 'ghost';
  title: string;
  onClick: () => void;
}

/**
 * @description A button component that can be used in various contexts.
 */
export function Button({
  children,
  title,
  size = 'md',
  active = false,
  loading = false,
  reference,
  icon,
  ...rest
}: ButtonProps) {
  const common =
    'border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-slate-500';
  const theme =
    'bg-slate-600 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-800';
  const sizes = { sm: `p-2`, md: 'p-4', lg: 'p-6' };
  return (
    <button
      className={clsx(styles['button'], common, theme, sizes[size], active)}
      ref={reference}
      {...rest}
    >
      {children ? children : <span className="button-label">{title}</span>}
    </button>
  );
}

export default Button;

import styles from './card.module.css';
import clsx from 'clsx';
import Button from '../button/button';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  density: 'condensed' | 'normal' | 'spacious';
}

export function Card({ children, density, size }: CardProps) {
  const base = 'w-fit flex flex-col gap-2 flex-min p-2';
  const common = 'rounded-md dark:focus:ring-slate-500';
  const theme = 'bg-gray-100 text-gray-600 hover:bg-gray-50';
  const densities = { condensed: `p-2`, normal: 'p-4', spacious: 'p-6' };

  return !children ? null : (
    <div
      className={clsx(
        styles['container'],
        base,
        common,
        theme,
        densities[density]
      )}
    >
      {children}

      <div className="card-actions">
        <Button title="Click me" size="sm" variant="fill" />
      </div>
    </div>
  );
}

export default Card;

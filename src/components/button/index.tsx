import clsx from 'clsx';
import { IButtonProps } from '../../types/interface/button';
import styles from './btn.module.css';

export const Button = ({ onClick, children, className }: IButtonProps) => (
  <button type='button' onClick={onClick} className={clsx(styles.btn, styles[className])}>
    {children}
  </button>
);

import { clsx } from 'clsx';
import { IInputProps } from '../../types/interface/props';
import styles from './input.module.css';

export const Input = ({ type, className, ...attrs }: IInputProps) => (
  <input type={type} className={clsx(styles[className])} {...attrs} />
);

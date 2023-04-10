import { IInputProps } from '../../types/interface/props';
import styles from './input.module.css';

export const Input = ({ type, className, ...attrs }: IInputProps) => (
  <input type={type} className={styles[className]} {...attrs} />
);

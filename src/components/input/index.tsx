import { ForwardedRef, forwardRef } from 'react';
import { clsx } from 'clsx';
import { IInputProps } from '../../types/interface/props';
import styles from './input.module.css';

export const Input = forwardRef((props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { type, className, ...attrs } = props;
  return <input type={type} ref={ref} className={clsx(styles[className])} {...attrs} />;
});
Input.displayName = 'InputComponent';

import { ForwardedRef, forwardRef } from 'react';
import { clsx } from 'clsx';
import { IInputProps } from '../../types/interface/props';
import styles from './input.module.css';

export const Input = forwardRef((props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { type, className, error, register, ...attrs } = props;
  const classes = clsx({
    [styles[className]]: true,
    [styles.error]: error,
  });
  return <input type={type} ref={ref} className={classes} {...register} {...attrs} />;
});
Input.displayName = 'InputComponent';

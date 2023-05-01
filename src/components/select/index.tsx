import { ForwardedRef, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ISelectProps } from '../../types/interface/props';
import styles from './select.module.css';

export const Select = forwardRef((props: ISelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { className, error, option, ...attrs } = props;
  const classes = clsx({
    [styles[className]]: true,
    [styles.error]: error,
  });
  return (
    <select ref={ref} className={classes} {...attrs}>
      {option.map((item) => (
        <option value={item.value} key={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
});
Select.displayName = 'SelectComponent';

import { PromtFormValue } from 'types/enums/form';
import clsx from 'clsx';
import styles from './styles.hint_form.module.css';

export const PromtForm = ({ error }: { error: boolean }) => {
  const classes = clsx({
    [styles.hint]: true,
    [styles.error]: !error,
    [styles.succes]: error,
  });
  const value = error ? PromtFormValue.SUCCES : PromtFormValue.FAIL;
  return <p className={classes}>{value}</p>;
};

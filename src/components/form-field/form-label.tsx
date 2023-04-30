import { ReactNode } from 'react';
import styles from './formField.module.css';

interface IFormFieldProps {
  labelName: string;
  children: ReactNode;
}

export const FormLabel = ({ labelName, children }: IFormFieldProps) => (
  <label className={styles.label}>
    {labelName}
    <div className={styles['wrapper-input']}>{children}</div>
  </label>
);

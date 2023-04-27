import { ReactNode } from 'react';
import styles from './formField.module.css';

interface IFormFieldProps {
  legendName: string;
  children: ReactNode[];
}

export const FormField = ({ legendName, children }: IFormFieldProps) => {
  const a = 0;
  return (
    <>
      <legend className={styles.legend}>{legendName}</legend>
      {children.map((item) => item)}
    </>
  );
};

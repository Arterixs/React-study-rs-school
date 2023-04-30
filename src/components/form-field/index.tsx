import { IFormFieldProps } from 'types/interface/form';
import styles from './formField.module.css';

export const FormField = ({ legendName, children }: IFormFieldProps) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>{legendName}</legend>
    {Array.isArray(children) ? children.map((item) => item) : children}
  </fieldset>
);

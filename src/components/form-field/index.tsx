import { IFormFieldProps } from 'types/interface/form';
import clsx from 'clsx';
import styles from './formField.module.css';

export const FormField = ({ legendName, error, children }: IFormFieldProps) => {
  const classesFieldset = clsx({
    [styles.fieldset]: true,
    [styles.errorField]: error,
  });
  const classesLegend = clsx({
    [styles.legend]: true,
    [styles.errorLegend]: error,
  });
  return (
    <fieldset className={classesFieldset}>
      <legend className={classesLegend}>{legendName}</legend>
      {Array.isArray(children) ? children.map((item) => item) : children}
    </fieldset>
  );
};

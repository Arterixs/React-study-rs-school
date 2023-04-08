import styles from './input.module.css';

export const Input = ({ type, className, defaultValue }: { type: string; className: string; defaultValue: number }) => (
  <input type={type} className={styles[className]} defaultValue={defaultValue} />
);

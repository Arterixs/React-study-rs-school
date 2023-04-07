import styles from './input.module.css';

export const Input = ({ type, className }: { type: string; className: string }) => (
  <input type={type} className={styles[className]} />
);

import styles from './hint.module.css';

export const Hint = ({ value }: { value: string }) => (
  <p className={styles.hint} data-testid='Hint'>
    {value}
  </p>
);

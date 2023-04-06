import styles from './not-found.module.css';

export const NotFound = () => (
  <div className={styles.wrapper}>
    <section className={styles.container}>
      <p className={styles.content}>Not Found</p>
      <p className={styles.content}>404</p>
    </section>
  </div>
);

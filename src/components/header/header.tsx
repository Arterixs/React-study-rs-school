import { Nav } from '../navigation/nav';
import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <section className={styles.container}>
      <Nav />
    </section>
  </header>
);

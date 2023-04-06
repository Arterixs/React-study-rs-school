import { Search } from './components/search/search';
import styles from './main.module.css';

export const Main = () => (
  <section className={styles.container}>
    <section className={styles['search-block']}>
      <p className={styles['search-block__title']}>Search</p>
      <Search />
    </section>
    <section>Card</section>
  </section>
);

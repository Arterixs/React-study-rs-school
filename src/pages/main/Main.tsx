import { Sprite } from '../../components/sprite/sprite';
import { ICardProps } from '../../types/interface/card';
import { Card } from './components/card';
import { Search } from './components/search/search';
import styles from './main.module.css';

export const Main = ({ contentCard }: ICardProps) => (
  <section className={styles.container}>
    <section className={styles['search-block']}>
      <p className={styles['search-block__title']}>Search</p>
      <Search />
    </section>
    <section className={styles['card-block']}>
      <Card {...{ contentCard }} />
    </section>
    <Sprite />
  </section>
);

import { ICardBlockProps } from 'types/interface/props';
import { Card } from '../card';
import styles from './card-block.module.css';

export const CardBlock = ({ contentCard }: ICardBlockProps) => (
  <section className={styles['card-block']}>
    {contentCard.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </section>
);

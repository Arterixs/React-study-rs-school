import { ICardBlockProps } from 'types/interface/props';
import styles from './card-block.module.css';
import { Card } from '../Card';

export const CardBlock = ({ contentCard }: ICardBlockProps) => (
  <section className={styles['card-block']}>
    {contentCard.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </section>
);

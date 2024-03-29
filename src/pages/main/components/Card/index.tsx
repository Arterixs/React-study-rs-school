import { ICardProps } from 'types/interface/props';
import { ImageCard } from './components/image';
import { Audio } from './components/audio';
import { Description } from './components/description';
import { AboutCard } from './components/about';
import styles from './card.module.css';

export const Card = ({ item }: ICardProps) => {
  const { image, name, description, species } = item;
  return (
    <article className={styles.card} data-testid='card'>
      <section className={styles.content}>
        <ImageCard {...{ image }} {...{ name }} />
        <AboutCard {...{ name }} {...{ species }} />
      </section>
      <section className={styles.audio}>
        <Audio />
      </section>
      <section className={styles.description}>
        <Description {...{ description }} />
      </section>
    </article>
  );
};

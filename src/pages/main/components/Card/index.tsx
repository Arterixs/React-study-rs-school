import { ICardProps } from '../../../../types/interface/card';
import { AboutCard } from './components/about';
import { Audio } from './components/audio';
import { Description } from './components/description';
import { ImageCard } from './components/image';
import styles from './card.module.css';

export const Card = ({ contentCard }: ICardProps) => {
  const { id, image, name, description, species } = contentCard[0][0];
  return (
    <article className={styles.card}>
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

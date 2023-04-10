import { IAboutCardProps } from 'types/interface/props';
import styles from './about-card.module.css';

export const AboutCard = ({ name, species }: IAboutCardProps) => (
  <section className={styles.about}>
    <h2 className={styles.name}>{name}</h2>
    <p className={styles.common}>{species}</p>
    <p className={styles.family}>Лесные птицы</p>
  </section>
);

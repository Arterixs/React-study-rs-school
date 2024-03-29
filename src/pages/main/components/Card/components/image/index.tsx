import { IImageCardProps } from 'types/interface/props';
import styles from './image.module.css';

export const ImageCard = ({ image, name }: IImageCardProps) => (
  <img src={image} alt={`birds_${name}`} className={styles.img} />
);

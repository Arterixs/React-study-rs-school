import { SVGClasses } from '../../types/enums/classes';
import styles from './svg.module.css';

export const Svg = ({ id, className }: { id: string; className: SVGClasses }) => (
  <svg className={styles[className]}>
    <use href={`#${id}`} />
  </svg>
);

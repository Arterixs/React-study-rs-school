import { DescriptionProps } from '../../../../../../types/type/description';
import styles from './description.module.css';

export const Description = ({ description }: DescriptionProps) => <p className={styles.descr}>{description}</p>;

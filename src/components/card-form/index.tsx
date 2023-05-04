import { IReadyObjectField } from 'types/interface/form';
import { clsx } from 'clsx';
import styles from './card-form.module.css';

export const CardForm = ({ data }: { data: IReadyObjectField }) => {
  const { birthday, firstName, lastName, country, gender, image } = data;
  const classesHead = clsx(styles['common-list'], styles['list-head']);
  const classesDown = clsx(styles['common-list'], styles['list-body']);
  return (
    <article className={styles.card} data-testid='form-card'>
      <img src={URL.createObjectURL(image)} alt='image_user' className={styles.image} />
      <ul className={styles['list-item']}>
        <li className={styles.list}>
          <div className={classesHead}>FirstName</div>
          <div className={classesDown}>{firstName}</div>
        </li>
        <li className={styles.list}>
          <div className={classesHead}>LastName</div>
          <div className={classesDown}>{lastName}</div>
        </li>
        <li className={styles.list}>
          <div className={classesHead}>Gender</div>
          <div className={classesDown}>{gender}</div>
        </li>
        <li className={styles.list}>
          <div className={classesHead}>Birthday</div>
          <div className={classesDown}>{birthday}</div>
        </li>
        <li className={styles.list}>
          <div className={classesHead}>Country</div>
          <div className={classesDown}>{country}</div>
        </li>
      </ul>
    </article>
  );
};

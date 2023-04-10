import { Input } from 'components/input';
import { InputClasses } from 'types/enums/classes';
import { TypesComponents } from 'types/enums/types-components';
import styles from './control.module.css';

export const Control = ({ stateBtn }: { stateBtn: boolean }) => (
  <section className={styles.control}>
    <Input type={TypesComponents.RANGE} className={InputClasses.AUDIO} defaultValue={0} />
    <div className={styles.timer}>
      <p className={styles.time}>0:00</p>
      <p className={styles.time}>0:00</p>
    </div>
  </section>
);

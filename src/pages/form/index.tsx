import { Form } from 'components/form';
import styles from './form.module.css';

export const FormPage = () => (
  <section className={styles.container}>
    <p data-testid='about-page'>Form</p>
    <Form />
  </section>
);

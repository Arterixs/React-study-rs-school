import { Form } from 'components/form';
import { IOption } from 'types/interface/form';
import styles from './form.module.css';

export const FormPage = (props: IOption) => {
  const { option } = props;
  return (
    <section className={styles.container}>
      <p data-testid='about-page'>Form</p>
      <Form option={option} />
    </section>
  );
};

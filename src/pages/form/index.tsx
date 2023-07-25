import { useState } from 'react';
import { Form } from 'components/form';
import { IPropsFormPage, IReadyObjectField } from 'types/interface/form';
import { CardForm } from 'components/card-form';
import styles from './form.module.css';

export const FormPage = ({ option }: IPropsFormPage) => {
  const [cards, setCards] = useState<IReadyObjectField[]>([]);
  let count = 0;

  const updateCard = (object: IReadyObjectField) => {
    const arrayCopy = cards.slice();
    arrayCopy.push(object);
    setCards(arrayCopy);
  };

  return (
    <section className={styles.container}>
      <p data-testid='form-page' className={styles.title}>
        Form
      </p>
      <Form option={option} setCard={updateCard} />
      <section className={styles['wrapper-cards']}>
        {cards.map((item) => {
          count += 1;
          return <CardForm data={item} key={count} />;
        })}
      </section>
    </section>
  );
};

import { Component } from 'react';
import { Form } from 'components/form';
import { IFromPageState, IPropsForm, IReadyObjectField } from 'types/interface/form';
import { CardForm } from 'components/card-form';
import styles from './form.module.css';

export class FormPage extends Component<IPropsForm, IFromPageState> {
  count: number;

  constructor(props: IPropsForm) {
    super(props);
    this.count = 0;
    this.state = {
      arrayCards: [],
    };
  }

  private setCard = (object: IReadyObjectField) => {
    this.count = 0;
    const { arrayCards } = this.state;
    const arrayCopy = arrayCards.slice();
    arrayCopy.push(object);
    this.setState({ arrayCards: arrayCopy });
  };

  render() {
    const { option } = this.props;
    const { arrayCards } = this.state;
    return (
      <section className={styles.container}>
        <p data-testid='about-page' className={styles.title}>
          Form
        </p>
        <Form option={option} setCard={this.setCard} />
        <section className={styles['wrapper-cards']}>
          {arrayCards.map((item) => {
            this.count += 1;
            return <CardForm data={item} key={this.count} />;
          })}
        </section>
      </section>
    );
  }
}

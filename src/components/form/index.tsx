import React, { Component } from 'react';
import { Input } from 'components/input';
import { InputTypes } from 'types/enums/types-components';
import { InputClasses } from 'types/enums/classes';
import styles from './form.module.css';

export class Form extends Component<unknown> {
  private firstName: React.RefObject<HTMLInputElement>;

  private lastName: React.RefObject<HTMLInputElement>;

  private birthday: React.RefObject<HTMLInputElement>;

  private country: React.RefObject<HTMLSelectElement>;

  private agree: React.RefObject<HTMLInputElement>;

  private file: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.agree = React.createRef();
    this.file = React.createRef();
  }

  render() {
    return (
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Info user</legend>
          <label className={styles.label}>
            FirstName
            <Input type={InputTypes.TEXT} className={InputClasses.FORM_TEXT} name='firstName' ref={this.firstName} />
          </label>
          <label className={styles.label}>
            LastName
            <Input type={InputTypes.TEXT} className={InputClasses.FORM_TEXT} name='lastName' ref={this.lastName} />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Birthday</legend>
          <label className={styles.label}>
            Date of Birth
            <Input type={InputTypes.DATE} className={InputClasses.FORM_BIRTHDAY} name='birthday' ref={this.birthday} />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Country</legend>
          <label className={styles.label}>
            Country of Residence
            <select name='Country' id='' ref={this.country}>
              <option value='vplvo'>Volvo</option>
            </select>
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Agree</legend>
          <label className={styles.label}>
            Consent to account processing
            <Input type={InputTypes.CHECKBOX} className={InputClasses.CHECKBOX} name='agree' ref={this.agree} />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Sex</legend>
          <label className={styles.label}>
            Male
            <Input type={InputTypes.RADIO} className={InputClasses.RADIO} name='male' />
          </label>
          <label className={styles.label}>
            Female
            <Input type={InputTypes.RADIO} className={InputClasses.RADIO} name='female' />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Photo</legend>
          <label className={styles.label}>
            Upload image
            <Input type={InputTypes.FILE} className={InputClasses.FILE} name='file' ref={this.file} />
          </label>
        </fieldset>
      </form>
    );
  }
}

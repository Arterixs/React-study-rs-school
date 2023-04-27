/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component, SyntheticEvent } from 'react';
import { Input } from 'components/input';
import { InputTypes } from 'types/enums/types-components';
import { InputClasses } from 'types/enums/classes';
import styles from './form.module.css';

interface IFormState {
  errorFirstName: boolean;
  errorLastName: boolean;
  errorBirthday: boolean;
  errorCountry: boolean;
  errorAgree: boolean;
  errorGender: boolean;
  errorFile: boolean;
}

export class Form extends Component<unknown, IFormState> {
  private firstName: React.RefObject<HTMLInputElement>;

  private lastName: React.RefObject<HTMLInputElement>;

  private birthday: React.RefObject<HTMLInputElement>;

  private country: React.RefObject<HTMLSelectElement>;

  private agree: React.RefObject<HTMLInputElement>;

  private male: React.RefObject<HTMLInputElement>;

  private female: React.RefObject<HTMLInputElement>;

  private file: React.RefObject<HTMLInputElement>;

  private arrayGender: React.RefObject<HTMLInputElement>[];

  constructor(props: unknown) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.agree = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.arrayGender = [this.male, this.female];
    this.state = {
      errorFirstName: false,
      errorLastName: false,
      errorBirthday: false,
      errorCountry: false,
      errorAgree: false,
      errorGender: false,
      errorFile: false,
    };
  }

  private findGenderCheck = () => this.arrayGender.find((ref) => ref.current?.checked);

  private validateFirstName = (value: string | undefined) => {
    if (value) {
      this.setState({ errorFirstName: false });
      return true;
    }
    this.setState({ errorFirstName: true });
    return false;
  };

  private validateLastName = (value: string | undefined) => {
    if (value) {
      this.setState({ errorLastName: false });
      return true;
    }
    this.setState({ errorLastName: true });
    return false;
  };

  private validateBirthday = (value: string | undefined) => {
    if (value) {
      this.setState({ errorBirthday: false });
      return true;
    }
    this.setState({ errorBirthday: true });
    return false;
  };

  private validateGender = (value: React.RefObject<HTMLInputElement> | undefined) => {
    if (value) {
      this.setState({ errorGender: false });
      return true;
    }
    this.setState({ errorGender: true });
    return false;
  };

  private validateAgree = (value: boolean | undefined) => {
    if (value) {
      this.setState({ errorAgree: false });
      return true;
    }
    this.setState({ errorAgree: true });
    return false;
  };

  private validateFile = (value: string | undefined) => {
    if (value) {
      this.setState({ errorFile: false });
      return true;
    }
    this.setState({ errorFile: true });
    return false;
  };

  private validateCountry = (value: string | undefined) => {
    if (value) {
      this.setState({ errorCountry: false });
      return true;
    }
    this.setState({ errorCountry: true });
    return false;
  };

  private convertCheck = () => {
    const arrayValidation = [];
    const valueFirstName = this.firstName.current?.value;
    const valueLastName = this.lastName.current?.value;
    const valueBirthday = this.birthday.current?.value;
    const valueAgree = this.agree.current?.checked;
    const valueFile = this.file.current?.value;
    const valueCountry = this.country.current?.value;
    const checkedGender = this.findGenderCheck();

    const isFirstField = this.validateFirstName(valueFirstName);
    arrayValidation.push(isFirstField);
    const isSecondField = this.validateLastName(valueLastName);
    arrayValidation.push(isSecondField);
    const isThreesField = this.validateBirthday(valueBirthday);
    arrayValidation.push(isThreesField);
    const isFourField = this.validateGender(checkedGender);
    arrayValidation.push(isFourField);
    const isFiveField = this.validateAgree(valueAgree);
    arrayValidation.push(isFiveField);
    const isSixField = this.validateFile(valueFile);
    arrayValidation.push(isSixField);
    const isSevenField = this.validateCountry(valueCountry);
    arrayValidation.push(isSevenField);

    const checkValidation = arrayValidation.find((item) => item === false);
    if (checkValidation === undefined) {
      return true;
    }
    return false;
  };

  private createObjectCards = () => {
    const sex = this.findGenderCheck();
    const date = this.convertDate('s');
    return {
      firstName: this.firstName.current?.value,
      lastName: this.lastName.current?.value,
      birthday: date,
      country: this.country.current?.value,
      gender: sex?.current?.value,
      agree: this.agree.current?.checked,
    };
  };

  private handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const validation = this.convertCheck();
    if (validation) {
      alert('Okay');
    }
    const object = this.createObjectCards();
  };

  private convertDate = (value: string | undefined) => {
    if (value) {
      return new Date(value);
    }
    return false;
  };

  render() {
    const { errorFirstName, errorLastName, errorBirthday, errorGender, errorAgree, errorFile, errorCountry } =
      this.state;
    return (
      <form className={styles.form} onSubmit={this.handleClick}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Info user</legend>
          <label className={styles.label}>
            FirstName
            <Input type={InputTypes.TEXT} className={InputClasses.FORM_TEXT} name='firstName' ref={this.firstName} />
          </label>
          {errorFirstName && <p style={{ color: 'red', fontSize: '26px' }}>Поле не может быть пустым</p>}
          <label className={styles.label}>
            LastName
            <Input type={InputTypes.TEXT} className={InputClasses.FORM_TEXT} name='lastName' ref={this.lastName} />
          </label>
          {errorLastName && <p style={{ color: 'red', fontSize: '26px' }}>Поле не может быть пустым</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Birthday</legend>
          <label className={styles.label}>
            Date of Birth
            <Input type={InputTypes.DATE} className={InputClasses.FORM_BIRTHDAY} name='birthday' ref={this.birthday} />
          </label>
          {errorBirthday && <p style={{ color: 'red', fontSize: '26px' }}>Заполни дату</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Country</legend>
          <label className={styles.label}>
            Country of Residence
            <select name='Country' ref={this.country}>
              <option value=''>-- choose a country --</option>
              <option value='USA'>USA</option>
              <option value='England'>England</option>
              <option value='Belarus'>Belarus</option>
              <option value='Russia'>Russia</option>
            </select>
          </label>
          {errorCountry && <p style={{ color: 'red', fontSize: '26px' }}>Выбери страну</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Agree</legend>
          <label className={styles.label}>
            Consent to account processing
            <Input type={InputTypes.CHECKBOX} className={InputClasses.CHECKBOX} name='agree' ref={this.agree} />
          </label>
          {errorAgree && <p style={{ color: 'red', fontSize: '26px' }}>Поставь галку</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Sex</legend>
          <label className={styles.label}>
            Male
            <Input type={InputTypes.RADIO} className={InputClasses.RADIO} name='sex' ref={this.male} value='male' />
          </label>
          <label className={styles.label}>
            Female
            <Input type={InputTypes.RADIO} className={InputClasses.RADIO} name='sex' ref={this.female} value='female' />
          </label>
          {errorGender && <p style={{ color: 'red', fontSize: '26px' }}>Сделай выбор</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Photo</legend>
          <label className={styles.label}>
            Upload image
            <Input type={InputTypes.FILE} className={InputClasses.FILE} name='file' ref={this.file} accept='image/*' />
          </label>
          {errorFile && <p style={{ color: 'red', fontSize: '26px' }}>Вложи файл</p>}
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

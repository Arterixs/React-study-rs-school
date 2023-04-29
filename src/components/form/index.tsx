import React, { Component, SyntheticEvent } from 'react';
import { convertDate } from 'utils/helpers/form';
import { Input } from 'components/input';
import { Hint } from 'components/hint';
import { InputTypes } from 'types/enums/types-components';
import { IFieldsForm } from 'types/enums/form';
import { ICountry, IFormState, IPropsForm, IValueFieldsForm } from 'types/interface/form';
import { FormField } from 'components/form-field';
import { PropsValueValidationField } from 'types/type/form';
import { FormLabel } from 'components/form-field/form-label';
import { InputClasses } from 'types/enums/classes';
import styles from './form.module.css';

export class Form extends Component<IPropsForm, IFormState> {
  private firstName: React.RefObject<HTMLInputElement>;

  private lastName: React.RefObject<HTMLInputElement>;

  private birthday: React.RefObject<HTMLInputElement>;

  private country: React.RefObject<HTMLSelectElement>;

  private agree: React.RefObject<HTMLInputElement>;

  private male: React.RefObject<HTMLInputElement>;

  private female: React.RefObject<HTMLInputElement>;

  private file: React.RefObject<HTMLInputElement>;

  private form: React.RefObject<HTMLFormElement>;

  private arrayGender: React.RefObject<HTMLInputElement>[];

  private option: ICountry[];

  constructor(props: IPropsForm) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.agree = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.form = React.createRef();
    this.arrayGender = [this.male, this.female];
    this.option = props.option;
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

  private findGenderCheck = () => this.arrayGender.find((ref) => ref.current?.checked)?.current?.value;

  private validationFields = (value: PropsValueValidationField, field: IFieldsForm) => {
    if (value) {
      switch (field) {
        case IFieldsForm.FIRSTNAME:
          this.setState({ errorFirstName: false });
          break;
        case IFieldsForm.LASTNAME:
          this.setState({ errorLastName: false });
          break;
        case IFieldsForm.COUNTRY:
          this.setState({ errorCountry: false });
          break;
        case IFieldsForm.IMAGE:
          this.setState({ errorFile: false });
          break;
        case IFieldsForm.GENDER:
          this.setState({ errorGender: false });
          break;
        case IFieldsForm.BIRTHDAY:
          this.setState({ errorBirthday: false });
          break;
        case IFieldsForm.AGREE:
          this.setState({ errorAgree: false });
          break;
        default:
          throw Error("Field doesn't valid");
      }
      return true;
    }
    switch (field) {
      case IFieldsForm.FIRSTNAME:
        this.setState({ errorFirstName: true });
        break;
      case IFieldsForm.LASTNAME:
        this.setState({ errorLastName: true });
        break;
      case IFieldsForm.COUNTRY:
        this.setState({ errorCountry: true });
        break;
      case IFieldsForm.IMAGE:
        this.setState({ errorFile: true });
        break;
      case IFieldsForm.GENDER:
        this.setState({ errorGender: true });
        break;
      case IFieldsForm.BIRTHDAY:
        this.setState({ errorBirthday: true });
        break;
      case IFieldsForm.AGREE:
        this.setState({ errorAgree: true });
        break;
      default:
        throw Error("Field doesn't valid");
    }
    return false;
  };

  private getObjectValueFierld = () => ({
    firstName: this.firstName.current?.value,
    lastName: this.lastName.current?.value,
    birthday: convertDate(this.birthday.current?.value),
    agree: this.agree.current?.checked,
    image: this.file.current?.value,
    country: this.country.current?.value,
    gender: this.findGenderCheck(),
  });

  private checkValidation = (objectFields: IValueFieldsForm) => {
    const { firstName, lastName, birthday, agree, image, country, gender } = objectFields;

    const isFirstField = this.validationFields(firstName, IFieldsForm.FIRSTNAME);
    const isSecondField = this.validationFields(lastName, IFieldsForm.LASTNAME);
    const isThreesField = this.validationFields(birthday, IFieldsForm.BIRTHDAY);
    const isFourField = this.validationFields(gender, IFieldsForm.GENDER);
    const isFiveField = this.validationFields(agree, IFieldsForm.AGREE);
    const isSixField = this.validationFields(image, IFieldsForm.IMAGE);
    const isSevenField = this.validationFields(country, IFieldsForm.COUNTRY);

    const arrayField = [isFirstField, isSecondField, isThreesField, isFourField, isFiveField, isSixField, isSevenField];

    const isCheckValidation = arrayField.find((item) => item === false);
    if (isCheckValidation === undefined) {
      return true;
    }
    return false;
  };

  private handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const objectFields = this.getObjectValueFierld();
    const isValid = this.checkValidation(objectFields);
    if (isValid) {
      const { setCard } = this.props;
      setCard(objectFields);
      this.clearForm();
    }
  };

  private clearForm = () => {
    if (this.form.current) {
      this.form.current.reset();
    }
  };

  render() {
    const { errorFirstName, errorLastName, errorBirthday, errorGender, errorAgree, errorFile, errorCountry } =
      this.state;
    return (
      <form className={styles.form} onSubmit={this.handleClick} ref={this.form}>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Info user'>
            <FormLabel labelName='FirstName'>
              <Input
                type={InputTypes.TEXT}
                className={InputClasses.FORM_TEXT}
                name={IFieldsForm.FIRSTNAME}
                ref={this.firstName}
              />
            </FormLabel>
            {errorFirstName && <Hint value='Поле не может быть пустым' />}
            <FormLabel labelName='LastName'>
              <Input
                type={InputTypes.TEXT}
                className={InputClasses.FORM_TEXT}
                name={IFieldsForm.LASTNAME}
                ref={this.lastName}
              />
            </FormLabel>
            {errorLastName && <Hint value='Поле не может быть пустым' />}
          </FormField>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Birthday'>
            <FormLabel labelName='Date of Birth'>
              <Input
                type={InputTypes.DATE}
                className={InputClasses.FORM_BIRTHDAY}
                name={IFieldsForm.BIRTHDAY}
                ref={this.birthday}
              />
            </FormLabel>
            {errorBirthday && <Hint value='Заполни дату' />}
          </FormField>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Country'>
            <FormLabel labelName='Country of Residence'>
              <select name={IFieldsForm.COUNTRY} ref={this.country}>
                {this.option.map((item) => (
                  <option value={item.value} key={item.id}>
                    {item.text}
                  </option>
                ))}
              </select>
            </FormLabel>
            {errorCountry && <Hint value='Выбери страну' />}
          </FormField>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Agree'>
            <FormLabel labelName='Consent to account processing'>
              <Input
                type={InputTypes.CHECKBOX}
                className={InputClasses.CHECKBOX}
                name={IFieldsForm.AGREE}
                ref={this.agree}
              />
            </FormLabel>
            {errorAgree && <Hint value='Поставь галку' />}
          </FormField>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Gender'>
            <FormLabel labelName='Male'>
              <Input
                type={InputTypes.RADIO}
                className={InputClasses.RADIO}
                name={IFieldsForm.GENDER}
                ref={this.male}
                value='male'
              />
            </FormLabel>
            <FormLabel labelName='Female'>
              <Input
                type={InputTypes.RADIO}
                className={InputClasses.RADIO}
                name={IFieldsForm.GENDER}
                ref={this.female}
                value='female'
              />
            </FormLabel>
            {errorGender && <Hint value='сделай выбор' />}
          </FormField>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <FormField legendName='Photo'>
            <FormLabel labelName='Upload image'>
              <Input
                type={InputTypes.FILE}
                className={InputClasses.FILE}
                name={IFieldsForm.IMAGE}
                ref={this.file}
                accept='image/*'
              />
            </FormLabel>
            {errorFile && <Hint value='Вложи файл' />}
          </FormField>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

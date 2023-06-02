import { Component, SyntheticEvent, createRef, RefObject } from 'react';
import { useForm } from 'react-hook-form';
import { checkedFileImage, convertDate, getYearDayMonth } from 'utils/helpers/form';
import { Input } from 'components/input';
import { Hint } from 'components/hint';
import { Select } from 'components/select';
import { PromtForm } from 'components/promt-form';
import { InputTypes } from 'types/enums/types-components';
import { HintForm, FieldsForm } from 'types/enums/form';
import { ICountry, IFormState, IPropsForm, IValueFieldsForm } from 'types/interface/form';
import { FormField } from 'components/form-field';
import { PropsValueValidationField } from 'types/type/form';
import { FormLabel } from 'components/form-field/form-label';
import { InputClasses } from 'types/enums/classes';
import styles from './form.module.css';

export const Form = ({ option, setCard }: IPropsForm) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      image: '',
      gender: '',
      birthday: '',
      agree: '',
    },
  });

  const clearForm = () => this.form.current?.reset();

  const findGenderCheck = () => this.arrayGender.find((ref) => ref.current?.checked)?.current?.value;

  const getObjectValueField = () => {
    const image = checkedFileImage(this.file.current?.files);
    return {
      firstName: this.firstName.current?.value,
      lastName: this.lastName.current?.value,
      birthday: convertDate(this.birthday.current?.value),
      agree: this.agree.current?.checked,
      image,
      country: this.country.current?.value,
      gender: this.findGenderCheck(),
    };
  };
  const onSubmit = () => {
    const objectFields = getObjectValueField();
    const getValidObject = checkValidation(objectFields);
    if (getValidObject) {
      setCard(getValidObject);
      this.clearForm();
      this.setState({ openHint: true, flagHint: true });
    } else {
      this.setState({ openHint: true, flagHint: false });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {openHint && <PromtForm error={flagHint} />}
      <FormField legendName='Username' error={errorFirstName || errorLastName}>
        <FormLabel labelName='FirstName'>
          <Input
            type={InputTypes.TEXT}
            className={InputClasses.FORM_TEXT}
            error={errorFirstName}
            name={FieldsForm.FIRSTNAME}
            register={register(FieldsForm.FIRSTNAME)}
          />
          {errorFirstName && <Hint value={HintForm.TEXT_INPUT} />}
        </FormLabel>
        <FormLabel labelName='LastName'>
          <Input
            type={InputTypes.TEXT}
            className={InputClasses.FORM_TEXT}
            name={FieldsForm.LASTNAME}
            error={errorLastName}
            register={register(FieldsForm.LASTNAME)}
          />
          {errorLastName && <Hint value={HintForm.TEXT_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Birthday' error={errorBirthday}>
        <FormLabel labelName='Date of Birth'>
          <Input
            type={InputTypes.DATE}
            className={InputClasses.FORM_BIRTHDAY}
            name={FieldsForm.BIRTHDAY}
            error={errorBirthday}
            register={register(FieldsForm.BIRTHDAY)}
          />
          {errorBirthday && <Hint value={HintForm.DATE_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Country' error={errorCountry}>
        <FormLabel labelName='Country of Residence'>
          <Select
            className='select'
            name={FieldsForm.COUNTRY}
            option={option}
            error={errorCountry}
            register={register(FieldsForm.COUNTRY)}
          />
          {errorCountry && <Hint value={HintForm.COUNTRY_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Agree' error={errorAgree}>
        <FormLabel labelName={null}>
          <div className={styles['wrapper-checkbox']}>
            <label htmlFor='checkbox'>Consent to account processing</label>
            <Input
              type={InputTypes.CHECKBOX}
              className={InputClasses.CHECKBOX}
              name={FieldsForm.AGREE}
              id='checkbox'
              register={register(FieldsForm.AGREE)}
            />
          </div>
          {errorAgree && <Hint value={HintForm.CHECKBOX_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Gender' error={errorGender}>
        <FormLabel labelName={null}>
          <div className={styles['wrapper-radio']}>
            <label htmlFor='female'>Female</label>
            <Input
              type={InputTypes.RADIO}
              className={InputClasses.RADIO}
              name={FieldsForm.GENDER}
              value='female'
              id='female'
              register={register(FieldsForm.GENDER)}
            />
            <label htmlFor='male'>Male</label>
            <Input
              type={InputTypes.RADIO}
              className={InputClasses.RADIO}
              name={FieldsForm.GENDER}
              value='male'
              id='male'
              register={register(FieldsForm.GENDER)}
            />
          </div>
          {errorGender && <Hint value={HintForm.GENDER_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Photo' error={errorFile}>
        <FormLabel labelName='Upload image'>
          <Input
            type={InputTypes.FILE}
            className={InputClasses.FILE}
            name={FieldsForm.IMAGE}
            accept='image/*'
            register={register(FieldsForm.IMAGE)}
          />
          {errorFile && <Hint value={HintForm.FILE_INPUT} />}
        </FormLabel>
      </FormField>
      <button type='submit' className={styles.submit}>
        Submit
      </button>
    </form>
  );
};

// export class Form extends Component<IPropsForm, IFormState> {
//   private firstName = createRef<HTMLInputElement>();

//   private lastName = createRef<HTMLInputElement>();

//   private birthday = createRef<HTMLInputElement>();

//   private country = createRef<HTMLSelectElement>();

//   private agree = createRef<HTMLInputElement>();

//   private male = createRef<HTMLInputElement>();

//   private female = createRef<HTMLInputElement>();

//   private file = createRef<HTMLInputElement>();

//   private form = createRef<HTMLFormElement>();

//   private arrayGender: RefObject<HTMLInputElement>[];

//   private option: ICountry[];

//   constructor(props: IPropsForm) {
//     super(props);
//     this.arrayGender = [this.male, this.female];
//     this.option = props.option;
//     this.state = {
//       errorFirstName: false,
//       errorLastName: false,
//       errorBirthday: false,
//       errorCountry: false,
//       errorAgree: false,
//       errorGender: false,
//       errorFile: false,
//       openHint: false,
//       flagHint: false,
//     };
//   }

//   componentDidUpdate() {
//     const { openHint } = this.state;
//     if (openHint) {
//       this.firstName.current?.focus();
//       setTimeout(() => this.setState({ openHint: false }), 4000);
//     }
//   }

//   private findGenderCheck = () => this.arrayGender.find((ref) => ref.current?.checked)?.current?.value;

//   private validationFields = (value: PropsValueValidationField, field: FieldsForm) => {
//     if (value) {
//       switch (field) {
//         case FieldsForm.FIRSTNAME:
//           this.setState({ errorFirstName: false });
//           break;
//         case FieldsForm.LASTNAME:
//           this.setState({ errorLastName: false });
//           break;
//         case FieldsForm.COUNTRY:
//           this.setState({ errorCountry: false });
//           break;
//         case FieldsForm.IMAGE:
//           this.setState({ errorFile: false });
//           break;
//         case FieldsForm.GENDER:
//           this.setState({ errorGender: false });
//           break;
//         case FieldsForm.BIRTHDAY:
//           this.setState({ errorBirthday: false });
//           break;
//         case FieldsForm.AGREE:
//           this.setState({ errorAgree: false });
//           break;
//         default:
//           throw Error("Field doesn't valid");
//       }
//       return true;
//     }
//     switch (field) {
//       case FieldsForm.FIRSTNAME:
//         this.setState({ errorFirstName: true });
//         break;
//       case FieldsForm.LASTNAME:
//         this.setState({ errorLastName: true });
//         break;
//       case FieldsForm.COUNTRY:
//         this.setState({ errorCountry: true });
//         break;
//       case FieldsForm.IMAGE:
//         this.setState({ errorFile: true });
//         break;
//       case FieldsForm.GENDER:
//         this.setState({ errorGender: true });
//         break;
//       case FieldsForm.BIRTHDAY:
//         this.setState({ errorBirthday: true });
//         break;
//       case FieldsForm.AGREE:
//         this.setState({ errorAgree: true });
//         break;
//       default:
//         throw Error("Field doesn't valid");
//     }
//     return false;
//   };

//   private getObjectValueField = () => {
//     const image = checkedFileImage(this.file.current?.files);
//     return {
//       firstName: this.firstName.current?.value,
//       lastName: this.lastName.current?.value,
//       birthday: convertDate(this.birthday.current?.value),
//       agree: this.agree.current?.checked,
//       image,
//       country: this.country.current?.value,
//       gender: this.findGenderCheck(),
//     };
//   };

//   private checkValidation = (objectFields: IValueFieldsForm) => {
//     const { firstName, lastName, birthday, agree, image, country, gender } = objectFields;

//     const isFirstField = this.validationFields(firstName, FieldsForm.FIRSTNAME);
//     const isSecondField = this.validationFields(lastName, FieldsForm.LASTNAME);
//     const isThreesField = this.validationFields(birthday, FieldsForm.BIRTHDAY);
//     const isFourField = this.validationFields(gender, FieldsForm.GENDER);
//     const isFiveField = this.validationFields(agree, FieldsForm.AGREE);
//     const isSixField = this.validationFields(image, FieldsForm.IMAGE);
//     const isSevenField = this.validationFields(country, FieldsForm.COUNTRY);

//     const arrayCheckField = [
//       isFirstField,
//       isSecondField,
//       isThreesField,
//       isFourField,
//       isFiveField,
//       isSixField,
//       isSevenField,
//     ];

//     const isCheckValidation = arrayCheckField.find((item) => !item);

//     if (!isCheckValidation && firstName && lastName && birthday && agree && image && country && gender) {
//       const parseDate = JSON.parse(birthday) as string;
//       const changeDate = getYearDayMonth(parseDate);
//       return {
//         firstName,
//         lastName,
//         birthday: changeDate,
//         gender,
//         agree,
//         image,
//         country,
//       };
//     }
//     return false;
//   };

//   private handleClick = (e: SyntheticEvent) => {
//     e.preventDefault();
//     const objectFields = this.getObjectValueField();
//     const getValidObject = this.checkValidation(objectFields);
//     if (getValidObject) {
//       const { setCard } = this.props;
//       setCard(getValidObject);
//       this.clearForm();
//       this.setState({ openHint: true, flagHint: true });
//     } else {
//       this.setState({ openHint: true, flagHint: false });
//     }
//   };

//   private clearForm = () => this.form.current?.reset();

//   render() {
//     const {
//       errorFirstName,
//       errorLastName,
//       errorBirthday,
//       errorGender,
//       errorAgree,
//       errorFile,
//       errorCountry,
//       openHint,
//       flagHint,
//     } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.handleClick} ref={this.form}>
//         {openHint && <PromtForm error={flagHint} />}
//         <FormField legendName='Username' error={errorFirstName || errorLastName}>
//           <FormLabel labelName='FirstName'>
//             <Input
//               type={InputTypes.TEXT}
//               className={InputClasses.FORM_TEXT}
//               error={errorFirstName}
//               name={FieldsForm.FIRSTNAME}
//               ref={this.firstName}
//             />
//             {errorFirstName && <Hint value={HintForm.TEXT_INPUT} />}
//           </FormLabel>
//           <FormLabel labelName='LastName'>
//             <Input
//               type={InputTypes.TEXT}
//               className={InputClasses.FORM_TEXT}
//               name={FieldsForm.LASTNAME}
//               error={errorLastName}
//               ref={this.lastName}
//             />
//             {errorLastName && <Hint value={HintForm.TEXT_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <FormField legendName='Birthday' error={errorBirthday}>
//           <FormLabel labelName='Date of Birth'>
//             <Input
//               type={InputTypes.DATE}
//               className={InputClasses.FORM_BIRTHDAY}
//               name={FieldsForm.BIRTHDAY}
//               ref={this.birthday}
//               error={errorBirthday}
//             />
//             {errorBirthday && <Hint value={HintForm.DATE_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <FormField legendName='Country' error={errorCountry}>
//           <FormLabel labelName='Country of Residence'>
//             <Select
//               className='select'
//               name={FieldsForm.COUNTRY}
//               ref={this.country}
//               option={this.option}
//               error={errorCountry}
//             />
//             {errorCountry && <Hint value={HintForm.COUNTRY_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <FormField legendName='Agree' error={errorAgree}>
//           <FormLabel labelName={null}>
//             <div className={styles['wrapper-checkbox']}>
//               <label htmlFor='checkbox'>Consent to account processing</label>
//               <Input
//                 type={InputTypes.CHECKBOX}
//                 className={InputClasses.CHECKBOX}
//                 name={FieldsForm.AGREE}
//                 ref={this.agree}
//                 id='checkbox'
//               />
//             </div>
//             {errorAgree && <Hint value={HintForm.CHECKBOX_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <FormField legendName='Gender' error={errorGender}>
//           <FormLabel labelName={null}>
//             <div className={styles['wrapper-radio']}>
//               <label htmlFor='female'>Female</label>
//               <Input
//                 type={InputTypes.RADIO}
//                 className={InputClasses.RADIO}
//                 name={FieldsForm.GENDER}
//                 ref={this.female}
//                 value='female'
//                 id='female'
//               />
//               <label htmlFor='male'>Male</label>
//               <Input
//                 type={InputTypes.RADIO}
//                 className={InputClasses.RADIO}
//                 name={FieldsForm.GENDER}
//                 ref={this.male}
//                 value='male'
//                 id='male'
//               />
//             </div>
//             {errorGender && <Hint value={HintForm.GENDER_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <FormField legendName='Photo' error={errorFile}>
//           <FormLabel labelName='Upload image'>
//             <Input
//               type={InputTypes.FILE}
//               className={InputClasses.FILE}
//               name={FieldsForm.IMAGE}
//               ref={this.file}
//               accept='image/*'
//             />
//             {errorFile && <Hint value={HintForm.FILE_INPUT} />}
//           </FormLabel>
//         </FormField>
//         <button type='submit' className={styles.submit}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

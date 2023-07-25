import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateDateBirthday } from 'utils/helpers/form';
import { Input } from 'components/input';
import { Hint } from 'components/hint';
import { Select } from 'components/select';
import { PromtForm } from 'components/promt-form';
import { InputTypes } from 'types/enums/types-components';
import { HintForm, FieldsForm } from 'types/enums/form';
import { IForm, IPropsForm } from 'types/interface/form';
import { FormField } from 'components/form-field';
import { FormLabel } from 'components/form-field/form-label';
import { InputClasses } from 'types/enums/classes';
import styles from './form.module.css';

export const Form = ({ option, setCard }: IPropsForm) => {
  const [state, setState] = useState(false);
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      image: '',
      gender: '',
      birthday: '',
      agree: false,
    },
  });

  const changeStateHint = () => {
    if (state) return;
    setState((prev) => !prev);
    setTimeout(() => {
      setState((prev) => !prev);
    }, 4000);
  };

  const onError = () => changeStateHint();

  const onSubmit = (data: IForm) => {
    const { birthday, image } = data;
    const changeDate = updateDateBirthday(birthday);
    if (image instanceof FileList && typeof image !== 'string') {
      const value = image[0];
      const newObject = { ...data, birthday: changeDate, image: value };
      setCard(newObject);
      changeStateHint();
      reset();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      {state && <PromtForm error={isSubmitSuccessful} />}
      <FormField legendName='Username' error={false}>
        <FormLabel labelName='FirstName'>
          <Input
            type={InputTypes.TEXT}
            className={InputClasses.FORM_TEXT}
            error={Boolean(errors.firstName)}
            name={FieldsForm.FIRSTNAME}
            register={register(FieldsForm.FIRSTNAME, { required: true })}
          />
          {errors.firstName && <Hint value={HintForm.TEXT_INPUT} />}
        </FormLabel>
        <FormLabel labelName='LastName'>
          <Input
            type={InputTypes.TEXT}
            className={InputClasses.FORM_TEXT}
            name={FieldsForm.LASTNAME}
            error={Boolean(errors.lastName)}
            register={register(FieldsForm.LASTNAME, { required: true })}
          />
          {errors.lastName && <Hint value={HintForm.TEXT_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Birthday' error={false}>
        <FormLabel labelName='Date of Birth'>
          <Input
            type={InputTypes.DATE}
            className={InputClasses.FORM_BIRTHDAY}
            name={FieldsForm.BIRTHDAY}
            error={Boolean(errors.birthday)}
            register={register(FieldsForm.BIRTHDAY, { required: true })}
          />
          {errors.birthday && <Hint value={HintForm.DATE_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Country' error={false}>
        <FormLabel labelName='Country of Residence'>
          <Select
            className='select'
            name={FieldsForm.COUNTRY}
            option={option}
            error={Boolean(errors.country)}
            register={register(FieldsForm.COUNTRY, { required: true })}
          />
          {errors.country && <Hint value={HintForm.COUNTRY_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Agree' error={false}>
        <FormLabel labelName={null}>
          <div className={styles['wrapper-checkbox']}>
            <label htmlFor='checkbox'>Consent to account processing</label>
            <Input
              type={InputTypes.CHECKBOX}
              className={InputClasses.CHECKBOX}
              name={FieldsForm.AGREE}
              id='checkbox'
              register={register(FieldsForm.AGREE, { required: true })}
            />
          </div>
          {errors.agree && <Hint value={HintForm.CHECKBOX_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Gender' error={false}>
        <FormLabel labelName={null}>
          <div className={styles['wrapper-radio']}>
            <label htmlFor='female'>Female</label>
            <Input
              type={InputTypes.RADIO}
              className={InputClasses.RADIO}
              name={FieldsForm.GENDER}
              value='female'
              id='female'
              register={register(FieldsForm.GENDER, { required: true })}
            />
            <label htmlFor='male'>Male</label>
            <Input
              type={InputTypes.RADIO}
              className={InputClasses.RADIO}
              name={FieldsForm.GENDER}
              value='male'
              id='male'
              register={register(FieldsForm.GENDER, { required: true })}
            />
          </div>
          {errors.gender && <Hint value={HintForm.GENDER_INPUT} />}
        </FormLabel>
      </FormField>
      <FormField legendName='Photo' error={false}>
        <FormLabel labelName='Upload image'>
          <Input
            type={InputTypes.FILE}
            className={InputClasses.FILE}
            name={FieldsForm.IMAGE}
            accept='image/*'
            register={register(FieldsForm.IMAGE, { required: true })}
          />
          {errors.image && <Hint value={HintForm.FILE_INPUT} />}
        </FormLabel>
      </FormField>
      <button type='submit' className={styles.submit}>
        Submit
      </button>
    </form>
  );
};

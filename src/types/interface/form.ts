import { ReactNode } from 'react';

export interface IFormState {
  errorFirstName: boolean;
  errorLastName: boolean;
  errorBirthday: boolean;
  errorCountry: boolean;
  errorAgree: boolean;
  errorGender: boolean;
  errorFile: boolean;
}

export interface IValueFieldsForm {
  firstName: string | undefined;
  lastName: string | undefined;
  birthday: string | null;
  agree: boolean | undefined;
  image: File | null;
  country: string | undefined;
  gender: string | undefined;
}

export interface IReadyObjectField {
  firstName: string;
  lastName: string;
  birthday: string;
  agree: true;
  image: File;
  country: string;
  gender: string;
}

export interface IFromPageState {
  arrayCards: IReadyObjectField[] | [];
}

export interface IPropsForm {
  option: ICountry[];
  setCard: (object: IReadyObjectField) => void;
}

export interface ICountry {
  value: string;
  id: number;
  text: string;
}

export interface IFormFieldProps {
  legendName: string;
  children: ReactNode[] | ReactNode;
}

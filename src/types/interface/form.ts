import { ReactNode } from 'react';

export interface IReadyObjectField {
  firstName: string;
  lastName: string;
  birthday: string;
  agree: boolean;
  image: File;
  country: string;
  gender: string;
}

export interface IForm {
  firstName: string;
  lastName: string;
  birthday: string;
  agree: boolean;
  image: File | string;
  country: string;
  gender: string;
}

export interface IFromPageState {
  arrayCards: IReadyObjectField[] | [];
}

export interface IPropsFormPage {
  option: ICountry[];
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
  error: boolean;
  children: ReactNode[] | ReactNode;
}

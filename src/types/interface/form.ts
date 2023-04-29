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
  birthday: string;
  agree: boolean | undefined;
  image: string | undefined;
  country: string | undefined;
  gender: string | undefined;
}

export interface IFromPageState {
  arrayCards: IValueFieldsForm[] | [];
}

export interface IPropsForm {
  option: ICountry[];
  setCard: (object: IValueFieldsForm) => void;
}

export interface ICountry {
  value: string;
  id: number;
  text: string;
}

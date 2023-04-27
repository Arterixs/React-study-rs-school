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
  gender: React.RefObject<HTMLInputElement> | undefined;
}

export interface IOption {
  option: ICountry[];
}

export interface ICountry {
  value: string;
  id: number;
  text: string;
}

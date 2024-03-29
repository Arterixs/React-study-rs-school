import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldsForm } from 'types/enums/form';
import { ButtonClasses, InputClasses } from '../enums/classes';
import { InputTypes } from '../enums/types-components';
import { IBirdsCard } from './card';
import { ICountry } from './form';

export interface IAboutCardProps {
  name: string;
  species: string;
}

export interface ISearchProps {
  func: (stateInput: string) => void;
}

export interface IButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: ButtonClasses;
}

export interface IImageCardProps {
  image: string;
  name: string;
}

export interface IMainProps {
  contentCard: IBirdsCard[][];
}

export interface ICardBlockProps {
  contentCard: IBirdsCard[];
}

export interface ICardProps {
  item: IBirdsCard;
}

export interface IInputProps {
  type: InputTypes;
  className: InputClasses;
  defaultValue?: number | string;
  value?: string | number;
  name?: string;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  accept?: string;
  error?: boolean;
  id?: string;
  register?: UseFormRegisterReturn<FieldsForm>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelectProps {
  className: string;
  defaultValue?: number | string;
  value?: string | number;
  name?: string;
  option?: ICountry[];
  ref?: React.RefObject<HTMLSelectElement>;
  accept?: string;
  error?: boolean;
  register?: UseFormRegisterReturn<FieldsForm.COUNTRY>;
}

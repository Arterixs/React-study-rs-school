import { ChangeEvent } from 'react';
import { ButtonClasses, InputClasses } from '../enums/classes';
import { InputTypes } from '../enums/types-components';
import { IBirdsCard } from './card';

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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

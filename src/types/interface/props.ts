import { ButtonClasses } from '../enums/classes';
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

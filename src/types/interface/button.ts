import { ButtonClasses } from '../enums/classes';

export interface IButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: ButtonClasses;
}

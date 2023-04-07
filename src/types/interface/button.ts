import { ButtonClasses } from '../enums/button';

export interface IButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: ButtonClasses;
}

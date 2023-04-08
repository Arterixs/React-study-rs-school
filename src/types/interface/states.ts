import { IBirdsCard } from './card';

export interface ISearchState {
  valueInput: string;
}

export interface IMainState {
  contentCard: IBirdsCard[];
  filterCard: IBirdsCard[];
}

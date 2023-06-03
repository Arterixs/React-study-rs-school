import { IBirdsCard } from 'types/interface/card';
import { searchCards } from './search-components';
import { setCopyBirds } from './copy-elements';

export const searchContentCard = (contentCard: IBirdsCard[], stateInput: string) => {
  const copyContentCard = setCopyBirds(contentCard);
  return searchCards(copyContentCard, stateInput);
};

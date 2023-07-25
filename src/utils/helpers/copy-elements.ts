import { IBirdsCard } from '../../types/interface/card';

export const setCopyBirds = (array: IBirdsCard[]) => {
  const jsonString = JSON.stringify(array);
  const copy = JSON.parse(jsonString) as IBirdsCard[];
  return copy;
};

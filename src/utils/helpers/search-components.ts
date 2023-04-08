import { IBirdsCard } from '../../types/interface/card';

export const searchCards = (array: IBirdsCard[], value: string) => {
  const resultSearch = array.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
  return resultSearch;
};

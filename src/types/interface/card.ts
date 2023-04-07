export interface IBirdsCard {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface ICardProps {
  contentCard: IBirdsCard[][];
}

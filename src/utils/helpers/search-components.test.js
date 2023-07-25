import { searchCards } from './search-components';

const data = [
  {
    name: 'Ворон',
  },
  {
    name: 'Ласточка',
  },
  {
    name: 'Карась',
  },
  {
    name: 'Лапоть',
  },
];

const output1 = [
  {
    name: 'Ворон',
  },
];

const output2 = [
  {
    name: 'Ворон',
  },
  {
    name: 'Ласточка',
  },
  {
    name: 'Лапоть',
  },
];

const output3 = [
  {
    name: 'Ласточка',
  },
  {
    name: 'Лапоть',
  },
];

describe('search cards', () => {
  test('one element found', () => {
    expect(searchCards(data, 'В')).toEqual(output1);
  });
  test('three items found', () => {
    expect(searchCards(data, 'О')).toEqual(output2);
  });
  test('two items found by word', () => {
    expect(searchCards(data, 'лА')).toEqual(output3);
  });
  test('nothing found', () => {
    expect(searchCards(data, 'б')).toEqual([]);
  });
});

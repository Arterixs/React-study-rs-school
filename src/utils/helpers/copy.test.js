import { setCopyBirds } from './copy-elements';

const data = [
  {
    item: 'Karas',
    view: 'fish',
    location: {
      America: false,
      Europe: true,
      Asia: true,
      Australia: true,
    },
  },
  1,
  'Strict mode',
  [1, 2, 3],
];

test('deep copy array', () => {
  expect(setCopyBirds(data)).toEqual(data);
});

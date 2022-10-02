import calkhealth from '../calkhealth';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const heroesSort = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('testhomework', () => {
  // console.log('hhh: ', calkhealth(heroes));
  expect(calkhealth(heroes)).toEqual(heroesSort);
});

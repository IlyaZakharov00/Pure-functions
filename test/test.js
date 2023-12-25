import status from '../src/status';

import sort from '../src/sort';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Дрыщ', health: 40 }, 'wounded'],
  [{ name: 'Труп', health: 10 }, 'critical'],
])('testing status', (man, expected) => {
  const result = status(man);
  expect(result).toBe(expected);
});

test('testing sort', () => {
  const result = sort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
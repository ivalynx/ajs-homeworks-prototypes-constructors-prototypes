import Character from '../app';

test('Если ударить на 10 points, то здоровья должно остаться 94', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(10);
  const result = char.health;
  expect(result).toBe(94);
});

test('Если ударить на 20 points, то здоровья должно остаться 88', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(20);
  const result = char.health;
  expect(result).toBe(88);
});

test('Если ударить на 30 points, то здоровья должно остаться 82', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(30);
  const result = char.health;
  expect(result).toBe(82);
});

test('Если ударить на 40 points, то здоровья должно остаться 76', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(40);
  const result = char.health;
  expect(result).toBe(76);
});

test('Если ударить на 50 points, то здоровья должно остаться 70', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(50);
  const result = char.health;
  expect(result).toBe(70);
});

test('Если ударить на 60 points, то здоровья должно остаться 64', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(60);
  const result = char.health;
  expect(result).toBe(64);
});

test('Если ударить на 70 points, то здоровья должно остаться 58', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(70);
  const result = char.health;
  expect(result).toBe(58);
});

test('Если ударить на 80 points, то здоровья должно остаться 52', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(80);
  const result = char.health;
  expect(result).toBe(52);
});

test('Если ударить на 90 points, то здоровья должно остаться 46', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(90);
  const result = char.health;
  expect(result).toBe(46);
});
test('Если ударить на 100 points, то здоровья должно остаться 40', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(100);
  const result = char.health;
  expect(result).toBe(40);
});
test('Если ударить на 1000 points, то персонаж должен наконец-то сдохнуть', () => {
  const char = new Character('cat', 'Bowman');
  char.damage(1000);
  const result = char.health;
  expect(result).toBe(0);
});

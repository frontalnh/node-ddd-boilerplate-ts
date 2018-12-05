import { hasValue } from '.';

test('Test has value', () => {
  let r1 = hasValue('1', ['1', '2', '3']);
  let r2 = hasValue('6', ['1', '2', '3']);
  expect(r1).toBe(true);
  expect(r2).toBe(false);
});

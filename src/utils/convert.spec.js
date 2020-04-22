import { kmToMi, miToKm } from './convert';

test('Kilometers to Miles test', () => {
  expect(kmToMi(5)).toBe(3.108);
});

test('Miles to Kilometers test', () => {
  expect(miToKm(2)).toBe(3.218);
});

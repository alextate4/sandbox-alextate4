import calculateDistance from './calculateDistance';

test('Haversine Distance', () => {
  expect(
    calculateDistance(
      { lat: 39.048257, lng: -95.67763 },
      { lat: 39.099726, lng: -94.578567 }
    )
  ).toBe(59.06);
});

const kmToMi = miles => {
  return parseFloat((miles / 1.609).toPrecision(4));
};

const miToKm = km => {
  return parseFloat((km * 1.609).toPrecision(4));
};

export { kmToMi, miToKm };

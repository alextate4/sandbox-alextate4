const calculateDistance = (point1, point2) => {
  const R = 3958.8; // Radius of the Earth in kilometers
  const rlat1 = point1.lat * (Math.PI / 180); // Point1 is users position & Point2 is planet...
  const rlat2 = point2.lat * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon = (point1.lng - point2.lng) * (Math.PI / 180); // Radian difference (longitudes)

  const d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return parseFloat(d.toFixed(2));
};

export default calculateDistance;

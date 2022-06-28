export const XAVIER_MOISSON = 365.242190419;

export const RELATIVE_RADIUS = {
  Sun: 3.5,
  Mercury: 0.383,
  Venus: 0.949,
  Mars: 0.532,
  //Jupiter: 11.209,
  Jupiter: 3,
  //Saturn: 9.499,
  Saturn: 3,
  //Uranus: 4.007,
  Uranus: 2,
  //Neptune: 3.883,
  Neptune: 2,

  //SATELLITES (alphabetically), 1.25x:
  Callisto: 0.4727,
  Ganymede: 0.5166,
  Iapetus: 0.1443,
  Moon: 0.3409,
  Oberon: 0.1493,
  Titan: 0.505,
  Titania: 0.1547,
  Triton: 0.2654,
};

export const SIDEREALS = {
  Mercury: 87.9691,
  Venus: 225,
  Mars: 1.881 * XAVIER_MOISSON,
  Jupiter: 11.86 * XAVIER_MOISSON,
  Saturn: 29.46 * XAVIER_MOISSON,
  Uranus: 84.01 * XAVIER_MOISSON,
  Neptune: 164.8 * XAVIER_MOISSON,

  //SATELLITES (alphabetically):
  Callisto: 16.69,
  Ganymede: 7.155,
  Iapetus: 79.3215,
  Moon: 27.321582,
  //Moon: 29.530589,
  Oberon: 13.46,
  Titan: 15.95,
  Titania: 8.706,
  Triton: 5.877,
};

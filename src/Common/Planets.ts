import { BASE_MODEL_ORBIT, BASE_MODEL_RADIUS } from "./AppSettings";
import { RELATIVE_RADIUS, SIDEREALS, EARTH_SIDEREAL } from "./AstroData";
import { COLORS } from "./Colors";

interface Satellite {
  siderealPeriod: number;
  modelRadius: number;
  modelOrbit: number;
}

interface Planet extends Satellite {
  color: string;
  satellites: Satellite[] | null;
}

export const planets: Planet[] = [
  {
    color: COLORS.Mercury,
    siderealPeriod: SIDEREALS.Mercury,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Mercury,
    modelOrbit: 1 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: COLORS.Venus,
    siderealPeriod: SIDEREALS.Venus,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Venus,
    modelOrbit: 1.87 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: COLORS.Earth,
    siderealPeriod: EARTH_SIDEREAL,
    modelRadius: BASE_MODEL_RADIUS,
    modelOrbit: 2.58 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Moon,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Moon,
        modelOrbit: 0.3 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: COLORS.Mars,
    siderealPeriod: SIDEREALS.Mars,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Mars,
    modelOrbit: 3.94 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: COLORS.Jupiter,
    siderealPeriod: SIDEREALS.Jupiter,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Jupiter,
    modelOrbit: 5.5 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Ganymede,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Ganymede,
        modelOrbit: 0.5 * BASE_MODEL_ORBIT,
      },
      {
        siderealPeriod: SIDEREALS.Callisto,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Callisto,
        modelOrbit: 0.7 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: COLORS.Saturn,
    siderealPeriod: SIDEREALS.Saturn,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Saturn,
    modelOrbit: 7.25 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Titan,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Titan,
        modelOrbit: 0.5 * BASE_MODEL_ORBIT,
      },
      {
        siderealPeriod: SIDEREALS.Iapetus,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Iapetus,
        modelOrbit: 0.7 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: COLORS.Uranus,
    siderealPeriod: SIDEREALS.Uranus,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Uranus,
    modelOrbit: 9 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Titania,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Titania,
        modelOrbit: 0.4 * BASE_MODEL_ORBIT,
      },
      {
        siderealPeriod: SIDEREALS.Oberon,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Oberon,
        modelOrbit: 0.6 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: COLORS.Neptune,
    siderealPeriod: SIDEREALS.Neptune,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Neptune,
    modelOrbit: 10.5 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Triton,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Triton,
        modelOrbit: 0.4 * BASE_MODEL_ORBIT,
      },
    ],
  },
];

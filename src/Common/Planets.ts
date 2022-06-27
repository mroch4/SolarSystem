import { BASE_MODEL_ORBIT, BASE_MODEL_RADIUS } from "./AppSettings";
import { RELATIVE_RADIUS, SIDEREALS, XAVIER_MOISSON } from "./AstroData";

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
    color: "#c6c6c6",
    siderealPeriod: SIDEREALS.Mercury,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Mercury,
    modelOrbit: 1 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: "#e3bb76",
    siderealPeriod: SIDEREALS.Venus,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Venus,
    modelOrbit: 2 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: "#3644e4",
    siderealPeriod: XAVIER_MOISSON,
    modelRadius: BASE_MODEL_RADIUS,
    modelOrbit: 3 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Moon,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Moon,
        modelOrbit: 0.4 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: "#c45f00",
    siderealPeriod: SIDEREALS.Mars,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Mars,
    modelOrbit: 4 * BASE_MODEL_ORBIT,
    satellites: null,
  },
  {
    color: "#a59186",
    siderealPeriod: SIDEREALS.Jupiter,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Jupiter,
    modelOrbit: 5 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Ganymede,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Ganymede,
        modelOrbit: 0.4 * BASE_MODEL_ORBIT,
      },
      {
        siderealPeriod: SIDEREALS.Callisto,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Callisto,
        modelOrbit: 0.7 * BASE_MODEL_ORBIT,
      },
    ],
  },
  {
    color: "#c3924f",
    siderealPeriod: SIDEREALS.Saturn,
    modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Saturn,
    modelOrbit: 7 * BASE_MODEL_ORBIT,
    satellites: [
      {
        siderealPeriod: SIDEREALS.Titan,
        modelRadius: BASE_MODEL_RADIUS * RELATIVE_RADIUS.Titan,
        modelOrbit: 0.4 * BASE_MODEL_ORBIT,
      },
    ],
  },
];

import { ISatellite } from "./ISatellite";

export interface IPlanet extends ISatellite {
  color: string;
  satellites: ISatellite[] | null;
}

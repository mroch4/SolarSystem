import { degreesToRadians } from "./degreesToRadians";

export const getCoordinates = (centerX: number, centerY: number, orbit: number, position: number) => {
  const x = centerX + orbit * Math.cos(degreesToRadians(position));
  const y = centerY + orbit * Math.sin(degreesToRadians(position));
  return { x, y };
};

export const degToRad = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const getCoordinates = (centerX: number, centerY: number, orbit: number, position: number) => {
  const x = centerX + orbit * Math.cos(degToRad(position));
  const y = centerY + orbit * Math.sin(degToRad(position));
  return { x, y };
};

export const drawObject = (ctx: CanvasRenderingContext2D, positionX: number, positionY: number, radius: number, color: string): void => {
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

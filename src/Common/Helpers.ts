const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const getCoordinates = (centerX: number, centerY: number, orbit: number, position: number) => {
  const x = centerX + orbit * Math.cos(degreesToRadians(position));
  const y = centerY + orbit * Math.sin(degreesToRadians(position));
  return { x, y };
};

export const drawObject = (ctx: CanvasRenderingContext2D, positionX: number, positionY: number, radius: number, color: string): void => {
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

export const drawOrbit = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number): void => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#6A6C6E";
  ctx.stroke();
};

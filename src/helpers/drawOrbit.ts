export const drawOrbit = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number): void => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#6A6C6E";
  ctx.stroke();
};

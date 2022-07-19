export const drawObject = (ctx: CanvasRenderingContext2D, positionX: number, positionY: number, radius: number, color: string): void => {
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

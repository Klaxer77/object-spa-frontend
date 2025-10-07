export const roundTo = (num: number) => {
  const factor = 10;
  return Math.round(num * factor) / factor;
};
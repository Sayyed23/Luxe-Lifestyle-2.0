export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const calculatePercentageChange = (
  current: number,
  previous: number
): number => {
  return ((current - previous) / previous) * 100;
};

export const filterOutliers = (numbers: number[]): number[] => {
  const sorted = numbers.sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  const lower = q1 - 1.5 * iqr;
  const upper = q3 + 1.5 * iqr;
  
  return sorted.filter(n => n >= lower && n <= upper);
};
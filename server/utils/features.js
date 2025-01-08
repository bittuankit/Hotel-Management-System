export const calculatePercentage = (thisMonth, lastMonth) => {
  if (lastMonth === 0) return thisMonth * 100;
  const percent = ((thisMonth - lastMonth) / lastMonth) * 100;
  return Number(percent.toFixed(0));
};

export const calculateGrossProfitPercentage = (revenue, expense) => {
  if (revenue < expense) {
    return -1 * expense * 100;
  }
  const percent = ((revenue - expense) / revenue) * 100;
  return Number(percent.toFixed(0));
};

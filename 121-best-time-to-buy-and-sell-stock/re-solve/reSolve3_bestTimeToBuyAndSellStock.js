/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minValue = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minValue = Math.min(prices[i], minValue);
    maxProfit = Math.max(prices[i] - minValue, maxProfit);
  }
  return maxProfit;
};

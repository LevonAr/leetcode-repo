// Big O
// Time: O(n)
// Space: O(1)
//                                v
// TEST CASE: prices = [7,1,5,3,6,4]
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice;
  for (let i = 0; i < prices.length; i++) {
    minPrice =
      minPrice == undefined ? prices[i] : Math.min(prices[i], minPrice);
    maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }
  return maxProfit;
};

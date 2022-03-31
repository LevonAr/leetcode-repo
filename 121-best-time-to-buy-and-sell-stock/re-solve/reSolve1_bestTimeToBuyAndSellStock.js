// Big O
// Time: O(n)
// Space: O(1)
//                                
// TEST CASE: prices = [7,1,5,3,6,4]
function maxProfit(prices) {
  let maxiProfit = 0;
  let minPrice;
  for (let i = 0; i < prices.length; i++) {
    minPrice =
      minPrice == undefined ? prices[i] : Math.min(prices[i], minPrice);
    maxiProfit = Math.max(prices[i] - minPrice, maxiProfit);
  }
  return maxiProfit;
}

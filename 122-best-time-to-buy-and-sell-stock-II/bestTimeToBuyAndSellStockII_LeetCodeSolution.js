/**
 * * Created: 5/18/21
 * To Solve: Leetcode 121: Best Time to Buy and Sell Stock
 * Solutions: [My One Pass Solution, LeetCode Simple One Pass]
 *
 * (My One Pass Solution)
 *
 * Big O
 * Time: O(n)
 * Space: O(1)
 *
 * @param {Array} prices
 * @returns {Number} maxProfit
 */

var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      maxProfit = maxProfit + (prices[i + 1] - prices[i]);
    }
  }
  return maxProfit;
};

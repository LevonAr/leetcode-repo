/**
 * * Created: 5/15/21
 * To Solve: Leetcode 121: Best Time to Buy and Sell Stock
 * Solutions: [My One Pass Solution, LeetCode Simple One Pass]
 *
 * (My One Pass Solution)
 *
 * Big O
 * Time: O()
 * Space: O()
 *
 * @param {Array} prices
 * @returns {Number} maxProfit
 */

var maxProfit = function (prices) {
  let ownStock = false;
  let maxProfit = 0;
  let priceBought;
  for (let i = 0; i < prices.length; i++) {
    if ((ownStock === true) & (prices[i] > prices[i + 1])) {
      const currentProfit = prices[i] - priceBought;
      maxProfit = maxProfit + currentProfit;
      ownStock = false;
    }
    if ((ownStock == false) & (prices[i] < prices[i + 1])) {
      priceBought = prices[i];
      ownStock = true;
    }
  }
  if (ownStock == true) {
    const currentProfit = prices[prices.length - 1] - priceBought;
    console.log("currentProfit:", currentProfit);
    maxProfit = maxProfit + currentProfit;
    ownStock = false;
  }
  return maxProfit;
};

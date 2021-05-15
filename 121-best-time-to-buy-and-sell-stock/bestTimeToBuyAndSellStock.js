/**
 * Created: 5/15/21
 * To Solve: Leetcode 121: Best Time to Buy and Sell Stock
 * Solutions: [One Pass Solution]
 *
 * (One Pass Solution)
 *
 * Big O
 * Time: O()
 * Space: O()
 *
 * @param {Array} list of stock prices
 * @returns {Number} maximum profit
 */
function bestTimeToBuyAndSellStock(prices) {
  let minPrice;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice =
      minPrice == undefined ? prices[i] : Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

/*
Notes: What we are actually doing is this: for every element, we are calculating the difference between that element and 
the minimum of all the values before that element and we are updating the maximum profit if the difference thus found is 
greater than the current maximum profit.

Used Kadane's Algorithm
*/

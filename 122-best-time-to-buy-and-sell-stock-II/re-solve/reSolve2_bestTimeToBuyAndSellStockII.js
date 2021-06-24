// Big O
// Time: O(n)
// Space: O(1)

var maxProfit = function (prices) {
  let holdStock = false;
  let boughtPrice;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    //if Im holding stock
    if (holdStock == true && prices[i] > prices[i + 1]) {
      holdStock = false;
      maxProfit = maxProfit + (prices[i] - boughtPrice);
    }
    //if not holding stock
    if (holdStock == false && prices[i] < prices[i + 1]) {
      holdStock = true;
      boughtPrice = prices[i];
    }
  }
  if (holdStock == true) {
    holdStock = false;
    maxProfit = maxProfit + (prices.pop() - boughtPrice);
  }
  return maxProfit;
};

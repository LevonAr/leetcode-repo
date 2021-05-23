var maxProfit = function (prices) {
  let maxProfit = 0;
  let ownStock = false;
  let priceBought;
  for (let i = 0; i < prices.length; i++) {
    // if we own stock and next value is dec, SELL
    if (ownStock == true && prices[i] > prices[i + 1]) {
      currentProfit = prices[i] - priceBought;
      maxProfit = maxProfit + currentProfit;
      ownStock = false;
    }
    // if we dont own stock and next value is inc, BUY
    if (ownStock == false && prices[i] < prices[i + 1]) {
      priceBought = prices[i];
      ownStock = true;
    }
  }
  // we bought a stock, and the price was going up until the end, so we didnt sell
  if (ownStock == true) {
    currentProfit = prices[prices.length - 1] - priceBought;
    maxProfit = maxProfit + currentProfit;
    ownStock = false;
  }
  return maxProfit;
};

// Brute Force Solution
// Big O
// Space: O(2^n)
// Time:O(1)

var climbStairs = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};
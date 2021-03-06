// Brute Force Solution
// Big O
// Space: O(n)
// Time:O(2^n)

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

/**
 * Created: 6/09/21
 * To Solve: Leetcode 70: Climbing Stairs
 * Solutions: [Brute Force Solution, Recursion with Memoization Solution]
 *
 * (Recursion with Memoization Solution)
 *
 * Big O
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} n - Number of stairs to climb on.
 * @returns {number} - Number of ways to climb a staircase.
 */
var climbingStairsMEMO = function (n) {
  let memo = [];
  var getSteps = function (m) {
    if (m <= 0) {
      // There is no way to go down - you climb the stairs only upwards.
      // Also if you're standing on the ground floor that you don't need to do any further steps.
      return 0;
    }
    if (m == 1) {
      // There is only one way to go to the first step.
      return 1;
    }
    if (m == 2) {
      // There are two ways to get to the second steps: (1 + 1) or (2).
      return 2;
    }
    if (memo[m]) {
      // Check if we already calculated this value
      return memo[m];
    }
    // If not, store it.
    memo[m] = getSteps(m - 1) + getSteps(m - 2);
    return memo[m];
  };
  return getSteps(n);
};

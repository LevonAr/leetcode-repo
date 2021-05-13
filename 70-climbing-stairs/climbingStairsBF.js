// Created: 5/12/21
// To Solve: Leetcode 70: Climbing Stairs

function climbingStairsBF(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }
  return climbingStairsBF(n - 1) + climbingStairsBF(n - 2);
}

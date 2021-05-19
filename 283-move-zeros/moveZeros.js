/**
 * * Created: 5/19/21
 * To Solve: 283. Move Zeroes
 * Solutions: [Approach #1 (Space Sub-Optimal), Approach #2 (Space Optimal, Operation Sub-Optimal)]
 *
 * Approach #2 (Space Optimal, Operation Sub-Optimal)
 *
 * Big O
 * Time: O(n)
 * Space: O(1)
 *
 * @param {Array} nums
 * @returns {} returns nothing, done in-place
 */

function moveZeros(nums) {
  let slowPointer = 0;
  // If the current element is not 0, then we need to
  // append it just in front of last non 0 element we found.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slowPointer] = nums[i];
      slowPointer++;
    }
  }
  // After we have finished processing new elements,
  // all the non-zero elements are already at beginning of array.
  // We just need to fill remaining array with 0's.
  for (let i = slowPointer; i < nums.length; i++) {
    nums[i] = 0;
  }
}

//Notes: Learn Approach #3 (Optimal) when time during re-solves

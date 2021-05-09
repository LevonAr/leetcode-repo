/*
BRUTE FORCE
linear search

Big O 
Time:  O(n)
Space: O(1)
*/

/*
ITERATION 1
binary search

Big O 
Time:  O(log(n))
Space: O(1)
*/

// @param {number[]} nums
// @param {number} target
// @return {number}
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  // split array
  while (startIndex <= endIndex) {
    // calculate middle index
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // check if the middle index value is target
    if (target == nums[middleIndex]) {
      return middleIndex;
    }

    // pick which side to look in
    if (target > nums[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return startIndex;
};

// --------------------------------------------------------------------------------------------------------
// Stuck: Got binary search to work, but could return position if target didnt exist
// Solution: "[line 44] return startIndex;" instead of messing with middleIndex
// --------------------------------------------------------------------------------------------------------

// TESTCASE 4
//
// target: 2
// v
//[1,3,5,6,8,9,11,12]
// ^

// TESTCASE 3
//
// target: 2
// v
//[1,2,5,6,8,9,11,12]
//                ^

// TESTCASE 2
//
// target: 10
// v
//[1,3,5,6,8,9,11,12]
//                 ^

// TESTCASE 1
//
// target: 10
//             v
//[1,3,5,6,8,9,10,12]
//                 ^

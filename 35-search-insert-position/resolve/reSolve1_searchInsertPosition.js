// TEST CASE : nums = [1,3,5,6]; target = 5
// binary search

var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (target == nums[middleIndex]) {
      return middleIndex;
    } else if (target < nums[middleIndex]) {
      endIndex = middleIndex - 1;
    } else if (target > nums[middleIndex]) {
      startIndex = middleIndex + 1;
    }
  }
  return startIndex;
};

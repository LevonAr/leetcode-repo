// Big O
// Space: O(1)
// Time:O(log(n))

var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (nums[midIndex] == target) {
      return midIndex;
    }
    if (target < nums[midIndex]) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }
  return startIndex;
};

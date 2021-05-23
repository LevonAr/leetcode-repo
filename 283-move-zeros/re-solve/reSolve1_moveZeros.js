// Big O
// Time: O(n)
// Space: O(1)

var moveZeroes = function (nums) {
  let slowPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slowPointer] = nums[i];
      slowPointer++;
    }
  }
  for (let i = slowPointer; i < nums.length; i++) {
    nums[i] = 0;
  }
};

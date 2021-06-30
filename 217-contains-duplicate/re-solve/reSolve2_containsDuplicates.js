// Big O
// Time: O(n)
// Space: O(n)

var containsDuplicate = function (nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.get(nums[i]) == true) {
      return true;
    } else {
      hashMap.set(nums[i], true);
    }
  }
  return false;
};

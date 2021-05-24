// Big O
// Time: O(n)
// Space: O(1)

var containsDuplicate = function (nums) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashTable.get(nums[i]) !== undefined) {
      return true;
    } else {
      hashTable.set(nums[i], true);
    }
  }
  return false;
};

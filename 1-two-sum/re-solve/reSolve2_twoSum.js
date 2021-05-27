// Big O
// Time: O(n)
// Space: O(n)
var twoSum = function (nums, target) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (hashTable.get(compliment) !== undefined) {
      return [i, hashTable.get(compliment)];
    } else {
      hashTable.set(nums[i], i);
    }
  }
};

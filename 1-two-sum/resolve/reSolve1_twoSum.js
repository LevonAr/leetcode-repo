function twoSum(nums, target) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (hashTable.has(compliment)) {
      return [hashTable.get(compliment), i];
    } else {
      hashTable.set(nums[i], i);
    }
  }
}

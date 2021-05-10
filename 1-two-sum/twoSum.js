/*
BRUTE FORCE:
linear

Big O
Time: O(n^2)
Space: O(1)
*/

/*
ATTEMPT 2
insert into hashtable 
check if complimentary value exists

Big O
Time: O(n)
Space: O(n)
*/

// @param {number[]} nums
// @param {number} target
// @return {number[]}
var twoSum = function (nums, target) {
  let HashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (HashTable.has(compliment)) {
      compliment_index = HashTable.get(compliment);
      return [i, compliment_index];
    }
    HashTable.set(nums[i], i);
  }
};

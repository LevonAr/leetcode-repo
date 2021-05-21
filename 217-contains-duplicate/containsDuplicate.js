/**
 * * Created: 5/21/21
 * To Solve: 217. Contains Duplicate
 * Solutions: [HashTable map.get, HashTable map.has]
 *
 * HashTable map.get
 *
 * Big O
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashTable.get(nums[i]) == undefined) {
      hashTable.set(nums[i], true);
    } else {
      return true;
    }
  }
  return false;
};

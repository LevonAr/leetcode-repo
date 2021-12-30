/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
           v
 nums = [2,7,11,15]
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let supplement = target - nums[i];
    if (supplement in hashMap == true) {
      return [hashMap[supplement], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};

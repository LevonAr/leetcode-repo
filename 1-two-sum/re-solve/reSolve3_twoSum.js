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
    console.log("hashMap", hashMap);
    let supplement = target - nums[i];
    if (hashMap[supplement]) {
      return [hashMap[supplement], i];
    } else {
      hashMap[supplement] = i;
    }
  }
};

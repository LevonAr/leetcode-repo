// BIG O
// TIME: O (n)
// SPACE: O (n)
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(hashMap[complement] !== undefined){
            return([i, hashMap[complement]]);
        }
        else{
            hashMap[nums[i]] = i;
        }
    }
};
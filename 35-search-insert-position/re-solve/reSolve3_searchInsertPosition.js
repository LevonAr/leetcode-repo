// Big O
// Space: O (1)
// Time:O (log(n))

var searchInsert = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    while(startIndex <= endIndex){
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        if (target === nums[middleIndex]){
            return middleIndex;
        }
        if (target < nums[middleIndex]){
            endIndex = middleIndex;
        }
        if (target > nums[middleIndex]){
            startIndex = middleIndex + 1;
        }
    }
    return startIndex;
};
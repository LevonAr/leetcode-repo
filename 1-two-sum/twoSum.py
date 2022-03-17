#convert to JS

def twoSum(self, nums, target):
    hashTable = {}
    for i in range(0, len(nums)):
        compliment = target - nums[i]
        if compliment in hashTable:
            compliment_index = hashTable[compliment]
            return [i, compliment_index]
        hashTable[nums[i]] = i

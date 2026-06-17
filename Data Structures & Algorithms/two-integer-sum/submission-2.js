class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            const diff = target - element;
            if (hash[diff] !== undefined) {
                return [i, hash[diff]];
            } else {
                hash[element] = i;
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const currSum = nums[l] + nums[i] + nums[r];
                if (currSum === 0) {
                    result.push([nums[l], nums[i], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) l++;
                } else if (currSum > 0 > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }
        return result;
    }
}

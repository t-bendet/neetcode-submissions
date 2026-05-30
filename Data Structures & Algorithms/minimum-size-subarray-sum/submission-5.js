class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minSize = Infinity;
        let runningSum = 0;
        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            const num = nums[r];
            if (num >= target) return 1;
            runningSum += num;
            while (runningSum >= target) {
                minSize = Math.min(minSize, r - l + 1);
                runningSum-= nums[l]
                l++;
            }
        }
        return minSize === Infinity ? 0 : minSize;
    }
}

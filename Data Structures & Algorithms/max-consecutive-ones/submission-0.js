class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let current = 0;

        for (const num of nums) {
            if (num === 1) {
                if (++current > max) max = current;
            } else {
                current = 0;
            }
        }

        return max;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const len = nums.length;
        const prefix = Array.from({ length: len });
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                prefix[i] = nums[i];
                continue;
            }
            prefix[i] = prefix[i - 1] + nums[i];
        }
        for (let i = 0; i < len; i++) {
            const pre = i === 0 ? 0 : prefix[i - 1];
            const post = i === len - 1 ? 0 : prefix[len - 1] - prefix[i];
            if(pre === post) return i
        }

        return -1;
    }
}

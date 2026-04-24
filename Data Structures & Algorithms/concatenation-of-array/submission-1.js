class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;
        const ans = Array.from({ length: len*2 });
        for (let i = 0; i < len; i++) {
            ans[i] = nums[i]
            ans[i+ len] = nums[i]
        }
        return ans
    }
}

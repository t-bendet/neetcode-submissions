class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const mid = nums[m];
            if (target === mid) {
                return m;
            }

            if (nums[l] <= mid) {
                if (target > mid || target < nums[l]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target < mid || target > nums[r]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }
        return -1;
    }
}

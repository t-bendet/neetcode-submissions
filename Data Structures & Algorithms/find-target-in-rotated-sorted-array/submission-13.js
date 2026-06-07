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
            const m = l + Math.floor((r - l) / 2);
            const mid = nums[m];
            if (mid === target) {
                return m;
            }
            const right = nums[r];
            if(right === target) return r
            if (right > mid) {
                if (target > mid && target < right) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target > right && target < mid) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }
        return -1;
            if (midVal === target) return midIndex;
            if (rightVal === target) return r;

            if (rightVal > midVal) {
                if (target < rightVal && target > midVal) {
                    l = midIndex + 1;
                } else {
                    r = midIndex - 1;
                }
            } else {
                if (target > rightVal && target < midVal) {
                    r = midIndex - 1;
                } else {
                    l = midIndex + 1;
                }
            }
        
    }
}

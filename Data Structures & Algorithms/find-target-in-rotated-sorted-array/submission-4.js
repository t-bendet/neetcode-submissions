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
            const midIndex = l + Math.floor((r - l) / 2);
            const midVal = nums[midIndex];
            const rightVal = nums[r];
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
        return -1;
    }
}

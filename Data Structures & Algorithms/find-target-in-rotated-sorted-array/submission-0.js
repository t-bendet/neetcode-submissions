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
            const mid = l + Math.floor((r - l) / 2);
            const midValue = nums[mid];
            const rightValue = nums[r];
            if (target === midValue) return mid;
            if (target === rightValue) return r;
            if (midValue > rightValue) {
                if (target > midValue) {
                    l = mid + 1;
                } else {
                    if (target < rightValue) {
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
            } else {
                if (target < midValue) {
                    r = mid - 1;
                } else {
                    if (target < rightValue) {
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
            }
        }
    return -1
    }
}

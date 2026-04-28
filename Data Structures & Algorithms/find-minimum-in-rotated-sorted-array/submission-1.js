class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        let min = nums[r];
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                min = Math.min(min, nums[l]);
                return min;
            }
            const mid = l + Math.floor((r - l) / 2);
            if (nums[mid] > min) {
                l = mid + 1;
            } else {
                min = nums[mid];
                r = mid - 1;
            }
        }
        return min;
    }
}

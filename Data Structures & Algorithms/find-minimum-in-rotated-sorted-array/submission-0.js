class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        if (nums[l] < nums[r]) return nums[l];

        let min = nums[r];
        while (l <= r) {
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

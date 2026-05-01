class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let current = 0;
        let end = nums.length -1;
        while (current <= end) {
            if (nums[current] == val) {
                nums[current] = nums[end];
                end--
            } else {
                current++;
            }

        }
        return current;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let current = 0;
        let end =nums.length -1
        while(current <= end){
            if(nums[current] !== val){
                current++;
            }else{
                if(nums[end] === val){
                    end--
                }else{
                    nums[current] = nums[end]
                    nums[end] = val
                    current++
                    end--
                }
            }

        }
        return current
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map([[0,1]]);
        let prefixSum = 0;
        let matched = 0
        for(let i =0;i< nums.length;i++){
            prefixSum+= nums[i]
            const needed = prefixSum - k;
            if(map.has(needed)){
                matched+= map.get(needed)
            }
            map.set(prefixSum,(map.get(prefixSum) || 0) + 1)



        }
        return matched
    }
}

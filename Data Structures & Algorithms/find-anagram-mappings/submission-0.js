class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const hash = {};
        for(let i =0;i<nums2.length;i++){
            hash[nums2[i]] = i
        }
        return nums1.map((item)=> hash[item])
    }
}

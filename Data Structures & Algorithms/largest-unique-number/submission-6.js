class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const map = new Map();
        let maxUnique = -1;
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        for (const [key, value] of map) {
            if(key > maxUnique && value === 1){
                maxUnique = key
            }
        }
        return maxUnique;
    }
}

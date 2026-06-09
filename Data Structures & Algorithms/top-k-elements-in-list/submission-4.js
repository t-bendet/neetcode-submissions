class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1);
        }
        for (const key of count.keys()) {
            freq[count.get(key)].push(key);
        }
        const result = [];
        for (let i = freq.length - 1; i > 0; i--) {
            if (freq[i].length === 0) continue;
            for(const item of freq[i]){
                result.push(item)
            }
            if(result.length === k) break;
        }
        return result
    }
}

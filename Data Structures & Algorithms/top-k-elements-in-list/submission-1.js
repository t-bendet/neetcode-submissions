class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = nums.reduce(
            (acc, curr) => {
                if (acc[curr]) {
                    acc[curr] += 1;
                } else {
                    acc[curr] = 1;
                }
                return acc;
            },

            {},
        );

        const res = Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((item) => Number(item[0]));
        return res;
    }
}

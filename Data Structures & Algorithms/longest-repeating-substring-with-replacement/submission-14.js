class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;

        let l = 0,
            maxf = 0;
        for (let r = 0; r < s.length; r++) {
            const curr = s[r];
            count.set(curr, (count.get(curr) || 0) + 1);
            maxf = Math.max(maxf, count.get(curr));

            while (r - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

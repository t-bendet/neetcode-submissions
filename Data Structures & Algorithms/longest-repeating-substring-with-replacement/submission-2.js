class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {}
        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const char = s[r]
            count[char] = (count[char] || 0) + 1
            while ( ((r - l + 1 ) - Math.max(...Object.values(count))) > k ) {
                const char = s[l]
                count[char] -=1
                l += 1
            }
            res = Math.max(res,r-l+1)
        }
        return res
    }
}

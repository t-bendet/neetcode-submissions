class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let max = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (!set.has(s[r])) {
                set.add(s[r]);
                if (set.size > max) {
                    max = set.size;
                }
            } else {
                while (true) {
                    if (s[l] !== s[r]) {
                        set.delete(s[l]);
                        l++;
                    } else {
                        l++;
                        break;
                    }
                }
            }
        }
        return max;
    }
}

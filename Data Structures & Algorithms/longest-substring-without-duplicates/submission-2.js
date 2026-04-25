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
            const char = s[r];
            while (set.has(char)) {
                set.delete(s[l]);
                l++;
            }
            set.add(char);
            if (set.size > max) {
                max = set.size;
            }

            // if (!set.has(char)) {
            //     set.add(char);
            //     if (set.size > max) {
            //         max = set.size;
            //     }
            //     continue;
            // }
            // while (s[l] !== char) {
            //     set.delete(s[l]);
            //     l++;
            // }
            // l++;
        }
        return max;
    }
}

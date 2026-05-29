class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const map = new Map();
        let res = 0;
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
            if (map.get(char) % 2 == 0) {
                res += 2;
            }
        }
        return res < s.length ? res + 1 : res;
    }
}

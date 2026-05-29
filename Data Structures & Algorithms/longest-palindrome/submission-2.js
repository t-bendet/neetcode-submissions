class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        return [...map.values()].reduce((acc, curr) => {
            if (curr % 2 === 1) {
                return acc % 2 === 0 ? acc + curr : acc + curr - 1;
            }
            return acc + curr;
        }, 0);
    }
}

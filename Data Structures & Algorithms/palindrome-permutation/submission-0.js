class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        if (s.length === 1) return true;
        const map = new Map();
        let oddExists = false;
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        for (const [key, value] of map) {
            const isOdd = value % 2 === 1;
            if (isOdd && oddExists) return false;
            if (isOdd) {
                oddExists = true;
            }
        }
        return true
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        if (s.length === 1) return true;
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        let oddExists = false;
        for (const value of map.values()) {
            const isOdd = value % 2 === 1;
            if (isOdd && oddExists) return false;
            oddExists = isOdd;
        }
        return true;
    }
}

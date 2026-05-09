class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        const map = new Array(128).fill(0);
        for (let i = 0; i < s.length; i++) {
            map[s.charCodeAt(i)]++;
        }
        let oddExists = false;
        for (let key = 0; key < map.length; key++) {
            const isOdd = map[key] % 2 === 1;
            if (oddExists && isOdd) return false;
            if (isOdd) {
                oddExists = true;
            }
        }
        return true;
    }
}

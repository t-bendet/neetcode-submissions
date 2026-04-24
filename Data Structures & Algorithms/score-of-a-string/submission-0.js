class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;
        for (let i = 1; i < s.length; i++) {
            const sum = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
            score += sum;
        }
        return score;
    }
}

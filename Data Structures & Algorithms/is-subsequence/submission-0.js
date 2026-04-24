class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        for (const str of s) {
            while (i <= t.length) {
                if (i === t.length) return false;
                if (str === t[i++]) break;
            }
        }
        return true;
    }
}

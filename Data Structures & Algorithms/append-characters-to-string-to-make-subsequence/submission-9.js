class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let si = 0;
        let ti = 0;
        while (si < s.length && ti < t.length) {
            if (s[si] === t[ti]) {
                si++;
                ti++;
                continue;
            }
            si++;
        }
        return t.length - ti;
    }
}

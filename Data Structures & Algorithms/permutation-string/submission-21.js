class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = new Map();
        for (const s of s1) {
            map.set(s, (map.get(s) || 0) + 1);
        }

        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            const char = s2[r];
            map.set(char, (map.get(char) || 0) - 1);
            while (map.get(char) < 0) {
                map.set(s2[l], (map.get(s2[l]) || 0) + 1);
                l++;
            }
            if (r - l + 1 === s1.length) return true;
        }
        return false;
    }
}

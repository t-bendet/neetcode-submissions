class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const hash = new Map();
        for (const el of s) {
            if (hash.has(el)) {
                const updatedCount = hash.get(el) + 1;
                hash.set(el, updatedCount);
            } else {
                hash.set(el, 1);
            }
        }
        for (const el of t) {
            if (hash.has(el)) {
                const updatedCount = hash.get(el) - 1;
                if(updatedCount < 0) return false
                hash.set(el, updatedCount);
            } else {
                return false
            }
        }
        return true
    }
}

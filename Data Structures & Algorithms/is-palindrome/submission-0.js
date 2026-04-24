class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitized = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
        let l = 0;
        let r = sanitized.length - 1;
        while (l < r) {
            const L = sanitized[l];
            const R = sanitized[r];
            if (L !== R) return false;
            l++;
            r--;
        }
        return true;
    }
}

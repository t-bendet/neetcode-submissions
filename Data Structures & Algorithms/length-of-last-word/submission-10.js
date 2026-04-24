class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        // const words = s.trim().split(" ");
        // return words[words.length - 1].length;
        if (s.length === 0) return 0;
        let length = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            let char = s[i];
            if (length > 0 && char === " ") {
                return length;
            }
            if (length === 0 && char === " ") {
                continue;
            }
            length++;
        }
        return length;
    }
}

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
        console.log('???')

            let char = s[i];
            if (length > 0 && char === " ") {
                return length;
            }
                console.log('here1')
            if (length === 0 && char === " ") {
                                console.log('here2')

                continue;
            }
            length++;
        }
        return length;
    }
}

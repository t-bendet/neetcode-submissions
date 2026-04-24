class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for (let i = 0; i < words.length; i++) {
            const row = words[i];
            for (let j = 0; j < row.length; j++) {
                const col = words[j];
                const isInvalid = !col || !row;
                if (isInvalid || row[j] !== col[i]) {
                    return false;
                }
            }
        }
        return true;
    }
}

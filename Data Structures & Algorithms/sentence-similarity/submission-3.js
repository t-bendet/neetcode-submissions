class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        const len1 = sentence1.length;
        const len2 = sentence2.length;
        // let j = 0;
        if (len1 !== len2) return false;
        for (let i = 0; i < len1; i++) {
            const word1 = sentence1[i];
            const word2 = sentence2[i];
            if (word1 === word2) {
                continue;
            }
            const pairExists = similarPairs.some(
                (pair) => pair.includes(word1) && pair.includes(word2),
            );
            if (!pairExists) {
                return false;
            }
        }
        return true;
    }
}

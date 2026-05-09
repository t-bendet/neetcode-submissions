class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        const map = new Map();
        let score = 0;
        for (let i = 0; i < keyboard.length; i++) {
            map.set(keyboard[i], i);
        }
        for (let i = 0; i < word.length; i++) {
            const prev = i === 0 ? 0:map.get(word[i-1]) 
            score+= Math.abs(prev - map.get(word[i]) )
        }
        return score
    }
}

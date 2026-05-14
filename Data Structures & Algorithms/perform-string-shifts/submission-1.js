class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s, shift) {
        const len = s.length;
        let offset = 0;
        const result = Array.from({ length: len });
        for (const [direction, distance] of shift) {
            direction === 0 ? (offset -= distance) : (offset += distance);
        }
        for (let i = 0; i < len; i++) {
            const newIndex = (((i + offset) % len) + len) % len;
            result[newIndex] = s[i];
        }
        return result.join('');

    }
}

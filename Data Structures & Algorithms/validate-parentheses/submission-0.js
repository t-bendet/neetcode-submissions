class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const stack = [];
        const match = { ")": "(", "}": "{", "]": "[" };

        for (const char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                if (stack.pop() !== match[char]) return false;
            }
        }

        return stack.length === 0;
    }
}

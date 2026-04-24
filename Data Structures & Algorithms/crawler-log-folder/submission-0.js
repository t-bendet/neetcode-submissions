class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        const stack = [];
        for (const char of logs) {
            if (char === "../" && stack.length > 0) {
                stack.pop();
            }
            if (char[0] !== ".") {
                stack.push(0);
            }
        }
        return stack.length;
    }
}

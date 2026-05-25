class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (const str of strs) {
            const sorted = [...str].sort().join("");
            const current = map.get(sorted);
            if (current !== undefined) {
                current.push(str)
            } else {
                map.set(sorted, [str]);
            }
        }
        return [...map.values()];
    }
}

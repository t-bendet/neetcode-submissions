class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);

            const aCodeValue = "a".charCodeAt(0);
            for (let i = 0; i < s.length; i++) {
                const currCodeValue =
                    s.charCodeAt(i) < aCodeValue ? s.charCodeAt(i) + 32 : s.charCodeAt(i);
                count[currCodeValue - aCodeValue] += 1;
            }
            const key = count.join(",");
            console.log({ count, key });
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let len = arr.length;
        let max = arr[len - 1];
        let res = Array.from({ length: len }, () => -1);
        for (let i = len - 2; i >= 0; i--) {
            res[i] = max;
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let len = arr.length;
        const max = [-1,arr[len - 1]];
        for (let i = len - 1; i >= 0; i--) {
            max[1] = arr[i]
            arr[i] = max[0];
            if (max[1] > max[0]) {
                max[0] = max[1];
            }
        }
        return arr;
    }
}

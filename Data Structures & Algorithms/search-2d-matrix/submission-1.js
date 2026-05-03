class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const columns = matrix[0].length;
        let l = 0;
        let r = rows * columns - 1;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            const row = Math.floor(mid / columns);
            const col = mid % columns;
            const value = matrix[row][col];
            if (value === target) return true;
            if (value < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;
    }
}

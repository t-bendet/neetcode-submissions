class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        const map = {};
        let res = 0;
        for (const num of arr) {
            map[num ] = true;
        }
        for (const num of arr) {
            if(map[num + 1]){
                res++
            }
        }
        return res
    }
}

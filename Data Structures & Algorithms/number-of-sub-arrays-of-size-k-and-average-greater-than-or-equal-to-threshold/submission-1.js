class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0;
        let runningSum = 0;
        let result = 0;
        for (let r = 0; r < arr.length; r++) {
            runningSum += arr[r];
            if (r + 1 < k) continue;
            if (runningSum / k >= threshold) {
                result++;
            }
            runningSum -= arr[l];
            l++;
        }
        return result;
    }
}

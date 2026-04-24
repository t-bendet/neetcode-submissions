class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let L = 0;
        for (let R = 1; R < prices.length; R++) {
            const sum = prices[R] - prices[L];
            if (sum > max) {
                max = sum;
            }
            if (prices[L] > prices[R]) {
                L = R;
            }
        }
        return max;
    }
}

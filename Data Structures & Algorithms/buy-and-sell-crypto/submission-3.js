class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let L = 0;
        for (let R = 1; R < prices.length; R++) {
            maxProfit = Math.max(maxProfit, prices[R] - prices[L]);
            if (prices[L] > prices[R]) {
                L = R;
            }
        }
        return maxProfit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let min = prices[0];
        let l = 0;
        for (let r = 0; r < prices.length ; r++) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            if (prices[r] < min) {
                min = prices[r];
                l = r;
            }
        }

        return maxProfit;
    }
}

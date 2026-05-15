class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.reduce((acc, person) => {
            return person[11] + person[12] > 60 ? acc + 1 : acc;
        }, 0);
    }
}

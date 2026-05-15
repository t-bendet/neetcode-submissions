class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for(const person of details){
            if(person[11]+ person[12] > 60){
                count++
            }
        }
        return count
    }
}

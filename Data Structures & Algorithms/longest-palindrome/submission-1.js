class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const map = new Map()
        for(const char of s){
            map.set(char,(map.get(char)|| 0)+1)
        }
        let oddExists = false
        return [...map.values()].reduce((acc,pre)=>{
            const isOdd = pre%2 === 1
            if(isOdd ){
                return acc % 2 === 0 ? acc+pre: acc+pre-1
            }
            return acc + pre
          
        },0)
    }
}

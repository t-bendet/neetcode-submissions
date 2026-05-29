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
        console.log(map)
        return [...map.values()].reduce((acc,pre)=>{
            const isOdd = pre%2 === 1
            let roundedDown = Math.floor(pre/2) *2
            if(isOdd && !oddExists ){
                roundedDown++
                oddExists = true
            }
            return acc + roundedDown
          
        },0)
    }
}

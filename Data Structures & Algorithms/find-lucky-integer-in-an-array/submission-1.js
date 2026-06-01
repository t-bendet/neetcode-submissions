class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const map = new Map();
        for(const num of arr){
            map.set(num,(map.get(num) || 0) +1)
        }
        const largestLucky = [...map.entries()].reduce((acc,prev)=>{
            const [key,val] = prev
            if(key === val && val>acc) return val
            return acc
            
        },-1)
        return largestLucky
    }
}

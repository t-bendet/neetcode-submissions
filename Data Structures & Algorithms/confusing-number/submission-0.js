class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        // if it's a zero we can remove it as long as it in the beginning
        // if it contains 2,3,4,5,7 return false
        // if it contains 6 or 9 switch
        const str = String(n);
        const array = [];
        for (let i = str.length - 1; i >= 0; i--) {
            const char = str[i];
            console.log( char,"char")
            if (char === '0' && array.length === 0) {
                continue;
            }
            if (char === "2" || char === "3" || char === "4" || char === "5" || char === "7") {
                return false;
            }
            if (char === "6") {
                array.push("9");
                continue;
            }
            if (char === "9") {
                array.push("6");
                continue;
            }
            array.push(char)
        }
        return n !== Number(array.join(''))
    }
}

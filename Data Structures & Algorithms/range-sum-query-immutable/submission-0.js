class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let total = 0;
        for(const num of nums){
            total += num
            this.prefix.push(total)
        }
        console.log(this.prefix)
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightVal = this.prefix[right]
        const lefVal = left === 0 ? 0 : this.prefix[left - 1];
        return rightVal -lefVal
    }
}

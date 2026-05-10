/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum, runningSum = 0) {
        // what id target sum is 0
        if (!root) return false;
        runningSum += root.val;
        if (runningSum === targetSum && !root.left && !root.right) return true;
        if (this.hasPathSum(root.left, targetSum, runningSum)) return true;
        if (this.hasPathSum(root.right, targetSum, runningSum)) return true;
        runningSum -= root.val;
        return false;
    }
}

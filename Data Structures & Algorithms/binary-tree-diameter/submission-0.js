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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;
        diameter(root);
        function diameter(root) {
            if (!root) return 0;
            const left = diameter(root.left);
            const right = diameter(root.right);
            max = Math.max(max, left + right);
            return Math.max(left + 1, right + 1);
        }
        return max;
    }
}

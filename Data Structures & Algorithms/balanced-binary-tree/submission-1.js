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
     * @return {boolean}
     */
    isBalanced(root) {
        const { isBalanced } = this.dfs(root);
        console.log(isBalanced)
        return isBalanced;
    }
    dfs(root) {
        if (!root) {
            return { isBalanced: true, height: 0 };
        }

        const { isBalanced:isLeftBalanced, height:leftHight } = this.dfs(root.left);
        const { isBalanced:isRightBalanced, height:rightHight } = this.dfs(root.right);

        const isBalanced =
            isLeftBalanced && isRightBalanced && Math.abs(leftHight - rightHight) <= 1;
        const height = 1 + Math.max(leftHight, rightHight);

        return { isBalanced, height };
    }
}

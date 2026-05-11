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
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = [];
        const res = [];
        if (root != null) {
            queue.push(root);
        }
        while (queue.length > 0) {
            const levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                const curr = queue.shift();
                if (i === levelLength - 1) {
                    res.push(curr.val);
                }
                if (curr.left != null) {
                    queue.push(curr.left);
                }
                if (curr.right != null) {
                    queue.push(curr.right);
                }
            }
        }
        return res;
    }
}

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
        const queue = [];
        const result = [];
        if (root !== null) {
            queue.push(root);
        }
        while (queue.length > 0) {
            const levelLength = queue.length;
            result.push(queue[queue.length - 1].val);
            for (let i = 0; i < levelLength; i++) {
                const node = queue.shift();
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }
}

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
    postorderTraversal(root) {
        const stack = [];
        const res = [];
        let curr = root;
        while (curr || stack.length > 0) {
            while (curr) {
                res.push(curr.val);
                stack.push(curr);
                curr = curr.right;
            }
            curr = stack.pop();
            curr = curr.left;
        }
        res.reverse()
        return res;
    }
}

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
     * @param {number} key
     * @return {TreeNode}
     */

    findMin(root) {
        while (root && root.left) {
            root = root.left;
        }
        return root.val;
    }

    deleteNode(root, key) {
        if (!root) {
            return null;
        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if (!root.right) {
                return root.left;
            } else if (!root.left) {
                return root.right;
            }

            const minNode = this.findMin(root.right);
            root.val = minNode;
            root.right = this.deleteNode(root.right, minNode);
            


        }
            return root;
    }
}

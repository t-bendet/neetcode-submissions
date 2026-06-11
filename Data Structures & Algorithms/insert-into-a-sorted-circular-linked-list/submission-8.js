/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node} head
     * @param {number} insertVal
     * @return {_Node}
     */
    insert(head, insertVal) {
        if (head === null) {
            let newNode = new _Node(insertVal, null);
            newNode.next = newNode;
            return newNode;
        }

        let prev = head;
        let curr = head.next;
        let toInsert = false;

        do {
            if (prev.val <= insertVal && insertVal <= curr.val) {
                // Case 1
                toInsert = true;
            } else if (prev.val > curr.val) {
                // Case 2
                if (insertVal >= prev.val || insertVal <= curr.val) toInsert = true;
            }

            if (toInsert) {
                prev.next = new _Node(insertVal, curr);
                return head;
            }

            prev = curr;
            curr = curr.next;
        } while (prev !== head);

        // Case 3
        prev.next = new _Node(insertVal, curr);
        return head;
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = head;

        // TBD if head val is val
        while (curr) {
            let nxt = curr.next;
            if (curr.val === val) {
                prev.next = nxt;
            } else {
                prev = curr;
            }
            curr = nxt;
        }

        return dummy.next;
    }
}

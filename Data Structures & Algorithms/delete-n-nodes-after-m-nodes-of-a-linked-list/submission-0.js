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
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    deleteNodes(head, m, n) {
        const dummy = new ListNode();
        let curr = dummy;
        let keepCounter = m;
        let skipCounter = n;
        while (head) {
            while (head && keepCounter > 0) {
                curr.next = head;
                head = head.next;
                curr = curr.next;
                keepCounter--;
            }
            while (head && skipCounter > 0) {
                head = head.next;
                skipCounter--;
            }
            keepCounter = m;
            skipCounter = n;
        }
        curr.next = null;
        return dummy.next;
    }
}

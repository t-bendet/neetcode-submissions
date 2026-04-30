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
     * @return {void}
     */
    reorderList(head) {
        // find the middle - list one =  head => slow
        // from the middle - list two = reverse list slow.next => tail
        // marge bot lists
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        slow.next = null;

        const dummy = new ListNode();
        let node = dummy;
        let index = 0;
        console.log({head,prev})
        while (head && prev) {
            const isEven = index % 2 === 0;
            if (isEven) {
                node.next = head;
                head = head.next;
            } else {
                node.next = prev;
                prev = prev.next;
            }
            node = node.next;
            index++;
        }
        if (head) {
            node.next = head;
        } else {
            node.next = prev;
        }

        return dummy.next;
    }
}

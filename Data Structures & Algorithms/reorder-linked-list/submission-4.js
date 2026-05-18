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
        // split
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let middle = slow.next;
        slow.next = null;

        // reverse
        let prev = null;
        let current = middle;
        while (current) {
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        console.log({head,prev})
        // merge

        let headFirst = true;
        let dummy = new ListNode();
        let node = dummy;
        while (head && prev) {
            if (headFirst) {
                node.next = head;
                head = head.next;
            } else {
                node.next = prev;
                prev = prev.next;
            }
            node = node.next;
            headFirst = !headFirst;
        }
        node.next = head || prev;

        return dummy.next;
    }
}

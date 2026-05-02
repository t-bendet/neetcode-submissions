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
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        slow.next = null;
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let reversedList = prev;
        let sortedList = head;

        const dummy = new ListNode(0, null);
        let node = dummy;
        let isEven = true;

        while (sortedList && reversedList) {
            if (isEven) {
                node.next = sortedList;
                sortedList = sortedList.next;
            } else {
                node.next = reversedList;
                reversedList = reversedList.next;
            }
            node = node.next;
            isEven = !isEven;
        }

        node.next = reversedList || sortedList

        return dummy.next;
    }
}

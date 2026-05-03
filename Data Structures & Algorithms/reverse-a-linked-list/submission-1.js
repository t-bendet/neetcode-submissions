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
     * @return {ListNode}
     */
    // reverseList(head) {
    //     let prev = null;
    //     let curr = head;
    //     while (curr) {
    //         const temp = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = temp;
    //     }
    //     return prev;
    // }
    reverseList(head) {
        if (!head || !head.next) {
            return head;
        }

        let newHead = head;
        newHead = this.reverseList(head.next);
        head.next.next = head;
        // console.log({newHead,head})
        head.next = null;
        return newHead;
    }
}

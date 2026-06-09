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
        let currentNode = head;
        let lastMNode = null;
        while (currentNode) {
            let keepCounter = m;
            let skipCounter = n;
            while (currentNode && keepCounter > 0) {
                lastMNode = currentNode;
                currentNode = currentNode.next;
                keepCounter--;
            }
            while (currentNode && skipCounter > 0) {
                currentNode = currentNode.next;
                skipCounter--;
            }
            lastMNode.next = currentNode;
        }
        return head;
    }
}

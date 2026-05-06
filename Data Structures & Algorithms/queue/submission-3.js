class ListNode {
    constructor(val = 0) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head === null && this.tail === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    /**
     * @return {void}
     */
    // tail
    pop() {
        if (this.isEmpty()) return -1;
        const val = this.tail.val;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return val;
    }

    /**
     * @return {number}
     */
    // head
    popleft() {
                if (this.isEmpty()) return -1;

        const val = this.head.val;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return val;
    }
}

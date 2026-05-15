class Logger {
    constructor() {
        this.messages = new Map();
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        const lastLog = this.messages.get(message) || 0;
        if (lastLog <= timestamp) {
            this.messages.set(message, timestamp + 10);
            return true;
        }
        return false;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

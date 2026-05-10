class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char);
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, currIndex, root) {
        let curr = root;

        for (let i = currIndex; i < word.length; i++) {
            const char = word[i];
            if (char === ".") {
                for (const child of curr.children.values()) {
                    if (this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!curr.children.has(char)) {
                    return false;
                }
                curr = curr.children.get(char);
            }
        }
        return curr.word;
    }
}



export class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  retrieve(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char);
    }
    return this.getAllWordsFromNode(current, prefix);
  }

  getAllWordsFromNode(node, prefix) {
    let words = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }
    for (let [char, childNode] of node.children) {
      let childPrefix = prefix + char;
      words = words.concat(this.getAllWordsFromNode(childNode, childPrefix));
    }
    return words;
  }
}

class Node {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.link = null;
    }
}

class LinkedList {
    constructor() {
        this.list = null;
        this.size = 0;
        this.currentPointer = null;
    }

    insert(node) {
        if (!this.list)
            this.list = node;
        else {
            let current = this.list;

            while (current.link) {
                current = current.link;
            }
            current.link = node;
        }
        ++this.size;
    }

    insertAtBegining(node) {
        node.link = this.list;
        this.list = node;
        ++this.size;
    }

    retrieve() {
        this.currentPointer = this.list;
        return this.currentPointer;
    }
}

const linkedList = new LinkedList();

linkedList.insert(new Node("gaurav", "gaurav@gmail.com", 24));
linkedList.insert(new Node("ankit", "ankit@gmail.com", 26));
linkedList.insert(new Node("perry", "perry@gmail.com", 22));
linkedList.insertAtBegining(new Node("gurmeet", "gurmeet@gmail.com", 24));

console.log(linkedList.list);
console.log(linkedList.size);
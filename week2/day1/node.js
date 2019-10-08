class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addToFront(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    displayValues(){
        // iterate the list
        // print the value of each node
        var current = this.head;
        while(current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
    isEmpty() {
        // returns true if empty / false if not
        return this.head === null;
    }
    headValue() {
        if(this.isEmpty())
            return "List is Empty";
        return this.head.value;
    }
    
}
let myList = new SLL();
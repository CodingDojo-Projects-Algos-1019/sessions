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
    addToFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(val) {
        // create a node
        var newNode = new Node(val);
        // move to the end of the list
        let currentNode = this.head;
        while(currentNode !== null) {
            // if currentNode.next is null, we are at the end
            if(currentNode.next === null) {
                currentNode.next = newNode;
                return;
            }
            currentNode = currentNode.next;
        }
        // attach new node to the .next of the last node
    }
    length() {
        let currentNode = this.head,
            count = 0;
        while(currentNode !== null) {

            count++;
            // Step 1b: "increment" currentNode
            currentNode = currentNode.next;
        }
        return count;
    }
    displayValues() {
        // Step 1: Loop through the list
        // Step 1a: create a variable for currentNode
        let currentNode = this.head;
        while(currentNode !== null) {

            // Step 2: Console.log each node's value
            console.log(currentNode.value);
            
            // Step 1b: "increment" currentNode
            currentNode = currentNode.next;
        }
    }

    // removes last node then returns its value
    removeLast() {
        
        // move through the list, until we've reached
        // the 2nd to last node
        var size = this.length(),
        count = 1;
        // EDGE CASE: one node list (head is only node)
        if(size < 1) {
            throw Error("Empty list ya dummy!");
        }
        
        // EDGE CASE: one node list (head is only node)
        if(size === 1) {
            let toReturn = this.head.value;
            this.head = null;
            return toReturn;
        }
        
        let currentNode = this.head;
        while(count < size-1) {
            count++;
            currentNode = currentNode.next;
        }
        var val = currentNode.next.value;
        currentNode.next = null;
        return val;
        
    }
    
    // removes first node then returns its value
    removeFirst() {
        var toReturn = this.head.value;
        this.head = this.head.next;
        return toReturn;
    }
    
    // takes a position (head is 1)
    // removes the node at that position
    removeAt(position) {
        // find the node at position-1
        // set that node's .next to that node's .next.next
        let size = this.length();
        let count = 1;
        
        if(position < 1 || position > size) {
            throw Error("Invalid position");
        }
        // if postition equates to last node:
        if(position === size) {
            return this.removeLast();
        }
        let currentNode = this.head;
        while(count < position-1) {
            count++;
            currentNode = currentNode.next;
        }
        var toRemove = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        return toRemove;
    }
}

let myList = new SLL();
myList.addToFront(3); // 0
myList.addToFront(2); // 1
myList.addToFront(1); // 2

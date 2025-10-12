class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1]; // Returns the last element
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const myStack = new Stack();
  myStack.push(10);
  myStack.push(20);
  console.log(myStack.peek()); // Output: 20
  console.log(myStack.pop());  // Output: 20 (element is removed)
  console.log(myStack.peek()); // Output: 10
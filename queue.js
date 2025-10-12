class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift(); // Removes and returns the first element
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0]; // Returns the first element
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue("A");
  myQueue.enqueue("B");
  console.log(myQueue.peek()); // Output: A
  console.log(myQueue.dequeue()); // Output: A (element is removed)
  console.log(myQueue.peek()); // Output: B
var node = function (value, next = null) {
    this.val = value;
    this.next = next
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    let i = 0;
    let curr = this.head;
    while(i < index) {
        curr = curr.next;
        i++;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new node(val, this.head);
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new node(val);
    if(!this.head) {
        this.head = newNode
    } else {
        let curr = this.head;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = newNode
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index >this.size) return;
    if(index == this.size) {
        this.addAtTail(val);
        return;
    }
    if(index == 0){
        this.addAtHead(val);
        return;
    }
    const newNode = new node(val);
    let curr = this.head;
    let i = 0;
    while(i<index - 1) {
        curr = curr.next;
        i++;
    }
    newNode.next = curr.next;
    curr.next = newNode
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    if(index == 0) {
        this.head = this.head.next
    } else {
    let curr = this.head;
    let i =0;
    while(i<index-1) {
        curr = curr.next;
        i++;
    }
    curr.next = curr.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let cyc =  new Set();
    let current = head;
    while(current != null) {
        if(cyc.has(current)) return true;
        cyc.add(current);
        current = current.next;
    }
    return false;  
};
//optimized version
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;  
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(-1);
    let carry = 0;
    let curr = dummyNode;
    let t1 = l1;
    let t2 = l2;

    while(t1 || t2) {
        let sum = carry;
        if(t1) sum += t1.val;
        if(t2) sum +=t2.val;
        let newNode = new ListNode(sum % 10)
        carry = Math.floor(sum/10);
        curr.next = newNode
        curr = curr.next;

        if(t1) t1 = t1.next;
        if(t2) t2 = t2.next;
    }

    if(carry) {
        let newNode = new ListNode(carry);
        curr.next = newNode;
    }
    return dummyNode.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1)
    let curr = dummyNode;
    let t1 = list1;
    let t2 = list2
    while(t1 && t2) {
        if(t1.val < t2.val) {
            curr.next = t1;
            t1 = t1.next;
        } else {
            curr.next = t2;
            t2 = t2.next;
        }
        curr = curr.next;
    }

    if(t1) curr.next = t1;
    if(t2) curr.next = t2;

    return dummyNode.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp = head;
    let prev = null;
    let front = new ListNode(-1)
    while(temp) {
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front
    }

    return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;
    let cnt = right - left + 1;
    let i = 1;
    let temp = head;
    let prev1 = null;
    while(i < left) {
        prev1 = temp
        temp = temp.next;
        i++;
    }

    let val = temp;
    let val2 = temp;
    let prev = null;
    let front = new ListNode(-1);
    while(cnt) {
        front = val.next;
        val.next = prev;
        prev = val;
        val = front;
        cnt--;
    }
    
    if (prev1) {
        prev1.next = prev;
    } else {
        head = prev;
    }
    val2.next = front
    return head;
};

//cleaner
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0, head);
    let prevNodeBeforeLeft = dummy;

    // Move to node before left
    for (let i = 1; i < left; i++) {
        prevNodeBeforeLeft = prevNodeBeforeLeft.next;
    }

    let val = prevNodeBeforeLeft.next;
    let prev = null;
    let front = null;
    let cnt = right - left + 1;

    // Reverse [left, right]
    while (cnt--) {
        front = val.next;
        val.next = prev;
        prev = val;
        val = front;
    }

    // Connect parts
    prevNodeBeforeLeft.next.next = val; // tail of reversed part to rest
    prevNodeBeforeLeft.next = prev;     // connect first part to reversed head

    return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let i = 1;
    let temp = head;
    let temp2 = head;
    while(temp) {
        size++;
        temp = temp.next;
    }
    
    if(n == size) {
        head = head.next;
        return head;
    }
    while(i < (size -n)) {
        temp2 = temp2.next;
        i++;
    }

    temp2.next = temp2.next.next;
    size--;
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let tail = head;
    let size = 1;
    while(tail.next) {
        tail = tail.next;
        size++;
    }

    tail.next = head;
    k = k%size;
    let lastNodeIndex = size - k;
    let endNote = head;
    let i = 1;
    while(i < lastNodeIndex) {
        endNote = endNote.next;
        i++;
    }
    head = endNote.next;
    endNote.next = null

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr) {
        while(curr.next && curr.val == curr.next.val) {
            curr.next = curr.next.next
        }
        curr = curr.next;
    }
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesCompletely = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr =  head;
    while(curr) {
        if(curr.next && curr.val == curr.next.val) {
            while(curr.next && curr.val == curr.next.val) {
                curr = curr.next
            }
            prev.next = curr.next
        } else {
            prev = prev.next;
        }
        curr = curr.next
    }

    return dummy.next
};
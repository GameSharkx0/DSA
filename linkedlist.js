class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

let reverseList = (head) => {
    let current = head;
    let previous = null;
    let next = head.next;
    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}


let n1 = new Node(1);
let n2 = new Node(2);
n1.next = n2;
let list = new LinkedList(n1);
let reversedList = reverseList(n1);
console.log(reversedList);

//null <-- n1   [nothing]  n2 --> null;
//null <-- n1 <-- n2

//n1 --> n2 --> null    ---- what we have;
//null <- n1 <-- n2;    ---- what we need;
//_______________^ Head
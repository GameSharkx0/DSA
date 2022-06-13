/**
Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let currentNode = head;
    let previousNode;
    let nextNode;
    while (currentNode !== null){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;    
    }
    return previousNode;
};

let newNode = new ListNode(1);
let newNode2 = new ListNode(2);
newNode.next = newNode2;

console.log(reverseList(newNode));
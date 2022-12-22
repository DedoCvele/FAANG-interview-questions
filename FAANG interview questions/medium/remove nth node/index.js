/* 
Given the head of a linked list, 
remove the nth node from the end of the 
list and return its head.
*/

let removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();
    dummy.next = head;
    helper(dummy, n);
    return dummy.next;
};

function helper(node, n) {
    if (!node) return 0;
    const i = helper(node.next, n);
    if (i === n) {
        node.next = node.next ? node.next.next : null;
    }
    return i + 1;
}
// Only given access to node to be deleted

/*
BIG O
TIME: O(1)
SPACE: O(1)
*/

//function ListNode(val) {
//  this.val = val;
//  this.next = null;

// @param {ListNode} node
// @return {void} Do not return anything, modify node in-place instead.
var deleteNode = function (node) {
  currentNode = node;
  nextNode = node.next;
  currentNode.val = nextNode.val;
  currentNode.next = nextNode.next;
};

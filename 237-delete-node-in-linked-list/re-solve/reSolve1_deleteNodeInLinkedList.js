// Big O
// Time: O(1)
// Space: O(1)

// TEST CASE : head = [4,5,1,9], node = 5
var deleteNode = function (node) {
  let nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
};

// Big O
// Time: O(n)
// Space: O(1)

var deleteDuplicates = function (head) {
  let currNode = head;
  while (currNode !== null && currNode.next !== null) {
    if (currNode.val == currNode.next.val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
};

// Solution Version: Repo Solution
// Big O
// Time: O(n)
// Space: O(1)
var reverseList = function (head) {
  let prevNode = null;
  let currNode = head;
  let nextNode = null;
  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

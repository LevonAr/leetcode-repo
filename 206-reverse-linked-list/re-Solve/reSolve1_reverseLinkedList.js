// Solution : Repo Solution
// Big O
// Time: O(n)
// Space: O(1)
var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;
  let nextNode = null;
  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

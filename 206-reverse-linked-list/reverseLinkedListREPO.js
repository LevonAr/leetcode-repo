/**
 * * Created: 5/20/21
 * To Solve: 206. Reverse Linked List
 * Solutions: [REPO Solution, ES6 Solution]
 *
 * Repo Solution
 *
 * Big O
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currNode !== null) {
    // Store next node.
    nextNode = currNode.next;

    // Change next node of the current node so it would link to previous node.
    currNode.next = prevNode;

    // Move prevNode and currNode nodes one step forward.
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

/**
 * * Created: 5/20/21
 * To Solve: 206. Reverse Linked List
 * Solutions: [REPO Solution, ES6 Solution]
 *
 * ES6 Solution
 *
 * Big O
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prevNode, currNode] = [null, head];

  while (currNode !== null) {
    [currNode.next, prevNode, currNode] = [prevNode, currNode, currNode.next];
  }
  return prevNode;
};

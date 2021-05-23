/**
 * * Created: 5/22/21
 * To Solve: 83. Remove Duplicates from Sorted List
 * Solutions: [Straight-Forward Approach]
 *
 * Straight-Forward Approach
 *
 * Big O
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
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

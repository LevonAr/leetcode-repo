/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slowPtr = head;
  let fastPtr = head;
  while (fastPtr?.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  return slowPtr;
};

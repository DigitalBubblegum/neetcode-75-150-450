/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pos = 1;
  let curr = head;
  let start = head;
  while (pos < left) {
    start = curr;
    curr = curr.next;
    pos++;
  }
  let newList = null;
  let tail = curr;
  while (pos >= left && pos <= right) {
    let next = curr.next;
    curr.next = newList;
    newList = curr;
    curr = next;
    pos++;
  }
  start.next = newList;
  tail.next = curr;
  return left > 1 ? head : newList;
};

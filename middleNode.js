/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let pos = 1;
  let curr = head;
  while (curr) {
    curr = curr.next;
    pos++;
  }
  let middle = Math.ceil(pos / 2);
  pos = 1;
  curr = head;
  while (curr) {
    if (pos >= middle) {
      return curr;
    }
    curr = curr.next;
    pos++;
  }
};

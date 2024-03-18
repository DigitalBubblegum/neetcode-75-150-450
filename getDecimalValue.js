/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let start = 0;
  let curr = head;
  let sum = 0;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // console.log(prev)
  while (prev) {
    sum = sum + prev.val * 2 ** start;
    // console.log(2**start,sum,curr.val)
    prev = prev.next;
    start++;
  }
  return sum;
};

//O(n) TC and O(n)SC solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let normal = "";
  let reverse = "";
  let curr = head;
  while (curr) {
    normal += curr.val;
    curr = curr.next;
  }
  let prev = null;
  curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // console.log(prev)
  curr = prev;
  while (curr) {
    reverse += curr.val;
    curr = curr.next;
  }
  return normal === reverse;
};

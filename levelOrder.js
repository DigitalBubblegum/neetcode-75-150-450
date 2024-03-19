/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    let count = 0;
    const curLevVal = [];
    while (count < length) {
      const curr = queue.shift();
      curLevVal.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      count++;
    }
    res.push(curLevVal);
  }
  return res;
};

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  // const ret = []
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    let count = 0;
    const clv = [];
    while (count < length) {
      const curr = queue.shift();
      clv.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      count++;
    }
    // res.push(clv)
    if (clv.length === 1) {
      res.push(clv);
    }
    if (clv.length !== 1) {
      res.push(clv[clv.length - 1]);
    }
  }
  // for(let i in res){
  //     if(res[i].length !== 1){
  //         res[i] = res[i][res[i].length-1]
  //     }
  // }
  return res;
};

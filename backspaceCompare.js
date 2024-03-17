/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let res1 = [];
  let res2 = [];
  for (let i in s) {
    if (s[i] === "#") {
      res1.pop();
    }
    if (!(s[i] === "#")) {
      res1.push(s[i]);
    }
  }
  for (let i in t) {
    if (t[i] === "#") {
      res2.pop();
    }
    if (!(t[i] === "#")) {
      res2.push(t[i]);
    }
  }
  console.log(res1, res2);
  return res1.join("") === res2.join("");
};
//OPTIMAL SOLUTION
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (S[p1] === "#" || T[p2] === "#") {
            if (S[p1] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p1--;
                    backCount--;

                    if (S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }

            if (T[p2] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p2--;
                    backCount--;

                    if (T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
};
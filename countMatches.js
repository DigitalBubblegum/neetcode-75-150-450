/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let cmap = new Map();
  let count = 0;
  let imap = new Map();
  if (ruleKey === "type") {
    imap.set(ruleKey, 0);
  }
  if (ruleKey === "color") {
    imap.set(ruleKey, 1);
  }
  if (ruleKey === "name") {
    imap.set(ruleKey, 2);
  }
  cmap.set(ruleKey, ruleValue);
  for (i in items) {
    if (items[i][imap.get(ruleKey)] === cmap.get(ruleKey)) count++;
  }
  return count;
};

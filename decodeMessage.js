/**
 * @param {string} keys
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (keys, message) {
  keys = keys.split(" ").join("").split("");
  values = "abcdefghijklmnopqrstuvwxyz".split("");
  let hmap = new Map();
  // console.log(keys.length,values.length)
  for (let i in keys) {
    if (!hmap.has(keys[i])) {
      hmap.set(keys[i], 1);
    }
  }
  let p = 0;
  hmap.forEach((v, k) => {
    hmap.set(k, values[p]);
    p += 1;
  });
  hmap.set(" ", " ");
  // console.log(hmap)
  message = message.split("").join("").split("");
  for (let i = 0; i < message.length; i++) {
    message[i] = hmap.get(message[i]);
  }
  message = message.join("");
  return message;
};

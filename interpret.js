/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let ret = "";
  let manip = command.split("");
  for (let i = 0; i < manip.length; i++) {
    if (manip[i] === "G") {
      ret += "G";
    }
    if (manip[i] === "(") {
      if (manip[i + 1] === ")") {
        ret += "o";
      } else {
        ret += "al";
      }
    }
  }
  return ret;
};

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  hours.map((hour) => {
    hour >= target ? (count += 1) : null;
  });
  return count;
};

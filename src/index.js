
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 1) {
        matrix[i].reverse();
      }
    }
    result = matrix.flat();
  }
  return result;
}


// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (!matrix) return result;
  for (let i = 0; i < matrix.length; i++) {
      if (matrix.indexOf(matrix[i]) % 2 === 0) {
          result.push(matrix[i]);

      }
      if (matrix.indexOf(matrix[i]) % 2 !== 0) {
          matrix[i].reverse();
          result.push(matrix[i]);
      }
  }
  return result.flat();
}

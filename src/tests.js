// function check(str, bracketsConfig) {
//   const obj = Object.fromEntries(bracketsConfig);
//   return str.split('').reduce((acc, cur) => if (cur === obj[acc.at(-1)]) { acc.pop() } else{acc.push(cur)} return acc,[].length === 0;
// }

function check(str, bracketsConfig) {
  return (
    str.split('').reduce((acc, cur) => {
      if (cur === Object.fromEntries(bracketsConfig)[acc.at(-1)]) {
        acc.pop();
      } else {
        acc.push(cur);
      }
      return acc;
    }, []).length === 0
  );
}

console.log(
  check('[]()(', [
    ['(', ')'],
    ['[', ']'],
  ])
);

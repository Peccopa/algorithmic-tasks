// module.exports = function check(str, bracketsConfig) {
//   const openBr = [];
//   const closeBr = [];
//   bracketsConfig.forEach(element => {
//     openBr.push(element[0]);
//     closeBr.push(element[1]);
//   });

//   let stackBr = [];
//   for (let i = 0; i < str.length; i++) {
//     let currentBr = str[i];
//     if (openBr.includes(currentBr) && closeBr.includes(currentBr)) {
//       if (stackBr.length === 0) {
//         stackBr.push(currentBr);
//       } else {
//         let topBr = stackBr[stackBr.length - 1];
//         if (currentBr === topBr) {
//           stackBr.pop();
//         } else {
//         stackBr.push(currentBr);
//         }
//       }
//     } else {
//       if (openBr.includes(currentBr)) {
//         stackBr.push(currentBr);
//       } else {
//         if (stackBr.length === 0) {
//           return false;
//         }
//         let topBr = stackBr[stackBr.length - 1];
//         if (closeBr.indexOf(currentBr) === openBr.indexOf(topBr)) {
//           stackBr.pop();
//         } else {
//           return false;
//         }
//       }
//     }
//   }
//   return stackBr.length === 0;
// };

// module.exports = function check(str, bracketsConfig) {
//   return (
//     str.split('').reduce((acc, cur) => {
//       if (Object.fromEntries(bracketsConfig)[acc.at(-1)] === cur) {
//         acc.pop();
//       } else {
//         acc.push(cur);
//       }
//       return acc;
//     }, []).length === 0
//   );
// };

module.exports = function check(str, bracketsConfig) {
  return (
    str.split('').reduce((acc, cur) => {
      Object.fromEntries(bracketsConfig)[acc.at(-1)] === cur
        ? acc.pop()
        : acc.push(cur);
      return acc;
    }, []).length === 0
  );
};

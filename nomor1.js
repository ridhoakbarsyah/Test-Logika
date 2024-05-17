function countSockPairs(socks) {
  const sockCount = {};
  let pairs = 0;

  socks.forEach((sock) => {
    if (sockCount[sock]) {
      sockCount[sock]++;
    } else {
      sockCount[sock] = 1;
    }
  });

  for (const count of Object.values(sockCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

const inputA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const inputB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const inputC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(countSockPairs(inputA));
console.log(countSockPairs(inputB));
console.log(countSockPairs(inputC));

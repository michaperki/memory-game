export const shuffleArray = (arr) => {
  const newArr = arr.sort((item) => Math.random() - 0.5);
  return newArr;
};

export const generateArrayOfRandomNumbers = (n, max) => {
  const arr = [];
  while (arr.length < n) {
    const newNum = Math.floor(Math.random() * max);
    if (!arr.includes(newNum)) {
      arr.push(newNum);
    }
  }
  return arr;
};

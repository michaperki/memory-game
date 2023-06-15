export const shuffleArray = (arr) => {
    const newArr = arr.sort((item)=>Math.random()-0.5);
    return newArr;
}
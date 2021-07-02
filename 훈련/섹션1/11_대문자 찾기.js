function findUppercase(str) {
  let arr = str.match(/[A-Z]/g);
  return arr.length;
}

console.log(findUppercase('KoreaTimeGood'));
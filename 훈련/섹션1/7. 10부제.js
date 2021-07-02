function noDriving(day, cars) {
  let count = 0;
  for (let i = 0; i < cars.length; i++) {
    if (day === cars[i] % 10) count++;
  }
  return count;
}

console.log(noDriving(3, [25, 23, 11, 47, 53, 17, 33]));

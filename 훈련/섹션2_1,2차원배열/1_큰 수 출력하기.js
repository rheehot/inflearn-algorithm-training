function bigNumber (numbers) {
  let answer = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1])
      answer.push(numbers[i])
  }
  return answer;
}
console.log(bigNumber([7, 3, 9, 5, 6 ,12]))
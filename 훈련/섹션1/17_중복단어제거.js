function removeRepeatedWord(arr) {
  let answer = [];
  for (let word of arr){
    if (!answer.includes(word))
      answer.push(word);
  }
  return answer;
}

console.log(removeRepeatedWord(["good", "time", "good", "time", "student"]));

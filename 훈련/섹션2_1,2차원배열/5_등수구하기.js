function rank (scores) {
  let answer = Array(scores.length).fill(1);
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (scores[i] < scores[j])
        answer[i]++;
    }
    
  }
  return answer;
}
console.log(rank([87, 89, 92, 100, 76]));
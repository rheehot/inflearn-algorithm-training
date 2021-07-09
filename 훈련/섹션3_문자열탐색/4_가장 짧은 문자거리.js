function minStrDist(str, t) {
  let answer = [];
  let dist = 1000;
  for (let i = 0; i < str.length; i++) { // 왼쪽에 있는 t로 부터의 거리
    str[i] === t ? dist = 0 : dist++;
    answer.push(dist);
  }
  dist = 1000;
  for (let i = str.length-1; i >= 0; i--) { // 오른쪽에 있는 t로 부터의 거리
    str[i] === t ? dist = 0 : dist++;
    answer[i] = Math.min(dist, answer[i]);
  }
  return answer;
}
console.log(minStrDist('teachermode', 'e'))
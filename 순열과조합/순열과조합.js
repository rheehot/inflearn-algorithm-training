// 중복순열
function permutationRepeat(arr, targetCount) {
  const answer = [];

  function util(count, bucket) {
    if (count === 0){
      answer.push(bucket);
      return;
    }
    
    for (let i = 0; i < arr.length; i++){
      util(count-1, bucket.concat(arr[i]));
    }
  }

  util(targetCount, []);
  return answer;
}
//console.log('중복순열: ', permutationRepeat([1, 2, 3], 3))

// 순열
function permutation(arr, targetCount) {
  const answer = [];

  function util(arrTakeout, bucket) {
    if (arrTakeout.length === arr.length - targetCount){
      answer.push(bucket);
      return;
    }
    
    for (let i = 0; i < arrTakeout.length; i++){
      let clone = arrTakeout.slice();
      let pick = clone.splice(i, 1);
      util(clone, bucket.concat(pick));
    }
  }

  util(arr, []);
  return answer;
}
//console.log('순열: ', permutation([1, 2, 3], 3))

// 조합
function combination(arr, targetCount) {
  let answer = [];

  function pickOrNot(idx, basket){
    if (basket.length === targetCount){
      answer.push(basket);
      return;
    }

    if (idx === arr.length) return;
    pickOrNot(idx+1, basket.concat(arr[idx]));
    pickOrNot(idx+1, basket);
  }

  pickOrNot(0, []);
  return answer;
}
//console.log('조합: ', combination([1, 2, 3, 4], 2))

// 중복조합
function combinationRepeat(arr, targetCount) {
  let answer = [];

  function util(arr, bucket) {
    if (bucket.length === targetCount){
      answer.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++){
      util(arr.slice(i), bucket.concat(arr[i]));
    }
  }

  util(arr, []);
  return answer;
}
console.log('중복조합: ', combinationRepeat([1, 2, 3, 4], 2))
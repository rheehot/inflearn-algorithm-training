function switchCase (str) {
  let result = '';
  for (let el of str){
    if (el.search(/[A-Z]/) !== -1) {
      result += el.toLowerCase();
    }
    else
      result += el.toUpperCase();    
  }
  return result;
}

console.log(switchCase('StuDY'))
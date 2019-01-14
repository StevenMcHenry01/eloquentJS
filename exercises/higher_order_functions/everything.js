function every(array, test) {
  for (let arr of array) {
    if (!test(arr)) return false
  }
  return true
}

function every2(array, test) {
  return !array.some(a => !test(a))
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
let arrayToList = (arr) => {
  let list = {}
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list}
  }
  return list
}

let listToArray = (list) => {
  let arr = []
  for (let node = list; node; node = node.rest) {
    arr.push(node.value)
  }
  arr.pop()
  return arr
}

let prepend = (value, list) => {
  list = {value: value, rest: list}
  return list
}

let nth = (list, index) => {
  for (let i = 0; i < index; i++) {
    list = list.rest
  }
  if (list.value === null) {
    return undefined
  } else return list.value
}
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20
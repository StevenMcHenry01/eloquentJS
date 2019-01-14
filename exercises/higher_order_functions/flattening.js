let arrays = [[1, 2, 3], [4, 5], [6]];

let flatten = (arrs) => {
  let flat = []
  flattened = arrs.reduce((a, b) => a.concat(b), flat)
  return flattened
}

console.log(flatten(arrays))
// → [1, 2, 3, 4, 5, 6]
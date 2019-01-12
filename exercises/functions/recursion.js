// recursive function to determin if a value is even (boolean)

let recursive = (number) => {
  number = Math.abs(number)
  if (number === 0) return true
  if (number === 1) return false
  if (number > 1) return recursive(number - 2)
}

console.log(recursive(-10))
console.log(recursive(75))
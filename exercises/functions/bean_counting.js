// two functions that each take part in counting characters

let countBs = (string) => {
  return countChar(string, 'B')
}

let countChar = (string, char) => {
  count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++
  }
  return count
}

console.log(countBs('BadBoysClub for Boys bb'))
console.log(countChar('Dont you dare Do it Dr Dolphin', 'D'))

let loop = (value, test, update, body) => {
  let temp = value
  for (let i = 0; i < value; i++) {
    if (!test(temp)) {return}
    body(temp)
    temp = update(temp)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
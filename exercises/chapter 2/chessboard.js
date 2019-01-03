let curr = ' '
let chess = ''
let size = 12
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    chess += curr;
    (curr === ' ' ? curr = '#' : curr = ' ')
  }
  chess += '\n';
  (curr === ' ' ? curr = '#' : curr = ' ')
}
console.log(chess)
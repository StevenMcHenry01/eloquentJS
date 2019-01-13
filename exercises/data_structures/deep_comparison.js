let deepEqual = (o1, o2) => {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false
  }
  for (let i = 0; i < Object.keys(o1).length; i++) {
    let temp1 = Object.keys(o1)[i]
    let temp2 = Object.keys(o2)[i]
    if (JSON.stringify(o1[temp1]) !== JSON.stringify(o2[temp2])){
      return false
    }
  }
  return true
}

let obj = {here: {is: "an"}, object: 2};
var temp = Object.keys(obj)[0]


console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
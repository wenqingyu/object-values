const objectValues = require('./index.js');

const a = {
  ab: 'array1',
  cb: 'array2',
  ef: 'array3'
}


const b = {
  ab: 'array1',
  cb: 'array2',
  ef: {
    in1: 'values1',
    in2: 'values2',
    in3: 'values3'
  },
  g: {
    in1: 'values1',
    in2: {
      in1: 'values1',
      in2: 'values2',
      in3: 'values3'
    },
    in3: 'values3'
  }
}

let result1 = objectValues(a);
let result2 = objectValues(b);
console.log(result1);
console.log(result2);

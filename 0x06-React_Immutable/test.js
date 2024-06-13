// test.js
const accessImmutableObject = require('./2-nested.js');

const obj = {
  name: {
    first: "Guillaume",
    last: "Salva"
  }
};

const result = accessImmutableObject(obj, ['name', 'first']);
console.log(result);  // Should output: Guillaume

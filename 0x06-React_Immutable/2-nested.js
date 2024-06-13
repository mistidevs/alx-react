// Accessing the value of an object at a defined path
const { fromJS } = require('immutable');

function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return immutableObject.getIn(array);
}

module.exports = accessImmutableObject;

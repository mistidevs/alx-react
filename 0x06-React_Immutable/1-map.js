// Using fromJS to create a map with 'immutable'
const { Map } = require('immutable');

function getImmutableObject (object) {
  return Map(object);
}

module.exports = getImmutableObject;

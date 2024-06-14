// Using fromJS to create a map with 'immutable'
const { fromJS } = require('immutable');

function getImmutableObject (object) {
  return fromJS(object);
}

module.exports = getImmutableObject;

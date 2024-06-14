// Using fromJS to create a map with 'immutable'
import { Map } from 'immutable';

const getImmutableObject = (object) => Map(object);

module.exports = getImmutableObject;

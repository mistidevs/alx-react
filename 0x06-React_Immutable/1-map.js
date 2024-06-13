// Using fromJS to create a map with 'immutable' 
import { Map } from './node_modules/immutable/dist/immutable';

function getImmutableObject(object) {
  return Map(object);
}

export default getImmutableObject;

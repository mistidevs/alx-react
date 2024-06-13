// Using fromJS to create a map with 'immutable' 
import { fromJS } from './node_modules/immutable/dist/immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

export default getImmutableObject;

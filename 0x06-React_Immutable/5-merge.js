// Concatenating multiple elements
import { List } from 'immutable';

export function concatElements (page1, page2) {
  const concatenatedArray = [...page1, ...page2];
  return List(concatenatedArray);
}

export function mergeElements (page1, page2) {
  const merged = { ...page1, ...page2 };
  return List(Object.values(merged));
}

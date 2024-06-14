// Concatenating multiple elements
const { List } = require('immutable');

function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

function mergeElements(page1, page2) {
  const merged = { ...page1, ...page2 };
  return List(Object.values(merged));
}

module.exports = { concatElements, mergeElements }
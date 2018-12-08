const { pseudoTranslate } = require('icu-pseudo-translate');

function transform_tree(node) {
  if (typeof node === 'string') {
    return pseudoTranslate(node);
  } else if (Array.isArray(node)){
    return node.reduce((accumulator, currentValue) => {
      return [...accumulator, transform_tree(currentValue)];
    }, []);
  } else if (typeof node === 'object' && node !== null) {
    return Object.keys(node).reduce((accumulator, currentValue) => {
      return { ...accumulator, [currentValue]: transform_tree(node[currentValue]) };
    }, {});
  } else {
    return node;
  }
}

module.exports = transform_tree;
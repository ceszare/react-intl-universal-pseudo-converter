const { pseudoTranslate } = require('icu-pseudo-translate');

/**
 * A utility that iterates through a tree and returns a new copy of the tree, where all the
 * leaf nodes of type `string` are transformed through the pseudoTranslate utility.
 *
 * @param node - A reference to the root node of the tree.
 * @returns - A reference to the root node of a new tree, in which string leaf nodes have been pseudo-localized.
 */
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

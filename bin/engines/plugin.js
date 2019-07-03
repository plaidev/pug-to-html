"use strict";

const bindAttrRE = /^v-bind:|^:/;
const eventAttrRE = /^v-on:|^@/;
const slotAttrRE = /^v-slot:|^#/;
const dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;

module.exports = function(walk) {
  return {
    postLoad: ast => {
      return walk(ast, (node, replace) => {
        if (node.type === 'Tag' && node.attrs && node.attrs.length > 0) {
          node.attrs = node.attrs.map(attr => {
            const name = attr.name;
            if (name.match(bindAttrRE) ||
                name.match(eventAttrRE) ||
                name.match(slotAttrRE) ||
                name.match(dirAttrRE)) {
              attr.mustEscape = false;
            }
            return attr;
          })
          replace(node);
        } 
      });
    }
  };
}
module.exports = attacher

const visit = require('unist-util-visit-parents');
const maxLines = 25

function attacher() {
  return function transformer(tree, _file) {
    visit(tree, (node, parents) => {
      if (node.type == 'code') {
        const lines = Array.from(node.value.split('\n')).length
        if (lines >= maxLines && parents[parents.length - 1].type !== 'details') {
          const cp = Object.assign({}, node)
          Object.assign(node, {
            type: 'details',
            title: '参考代码',
            header: '??? "参考代码"\n',
            children: [cp]
          })
        }
      }
    })
  }
}

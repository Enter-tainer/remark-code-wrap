module.exports = attacher

function attacher() {
  return function transformer(tree, file) {
    console.log(JSON.stringify(tree, undefined, 2))
  }
}

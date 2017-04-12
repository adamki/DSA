function Node (val, next) {
  if (!next) next = null
  return { val, next }
}

module.exports = Node

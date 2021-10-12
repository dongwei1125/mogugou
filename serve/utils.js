function getDiffRandom(length) {
  const stack = []

  do {
    const random = getRandom(0, length - 1)

    if (!stack.includes(random)) {
      stack.push(random)
    }
  } while (stack.length < 3)

  return stack
}

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {
  getRandom,
  getDiffRandom,
}

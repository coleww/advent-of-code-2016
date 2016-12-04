var input = require('./day3data')

function isValid (lengths) {
  return [[0, 1, 2], [1, 2, 0], [0, 2, 1]].every((sides) => {
    return +lengths[sides[0]] + +lengths[sides[1]] > +lengths[sides[2]]
  })
}

console.log(input.filter(isValid).length)
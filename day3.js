var input = require('./day3data')


var colInput = []

for (var i = 0; i < input.length; i += 3) {
  var first = input[i]
  var second = input[i + 1]
  var third = input[i + 2]
  colInput.push([first[0], second[0], third[0]])
  colInput.push([first[1], second[1], third[1]])
  colInput.push([first[2], second[2], third[2]])
}

function isValid (lengths) {
  return [[0, 1, 2], [1, 2, 0], [0, 2, 1]].every((sides) => {
    return +lengths[sides[0]] + +lengths[sides[1]] > +lengths[sides[2]]
  })
}

console.log(colInput.filter(isValid).length)
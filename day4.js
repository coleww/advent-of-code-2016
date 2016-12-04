var input = require('./day4data')


function formatKey (key) {
  var checksum = key.match(/\[(\w+)\]/)[1]
  var letters = key.split("-")
  var sectorId = letters.pop().split("[")[0]
  return {
    letters: letters.reduce((acc, str) => {
      return acc + str
    }, ""),
    sectorId: +sectorId,
    checksum: checksum
  }
}

function orderLetters (letters) {
  var lettersCounter = letters.split('').reduce((obj, letter) => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1
    return obj
  }, {})

  return Object.keys(lettersCounter).sort((letterA, letterB) => {
    if (lettersCounter[letterA] < lettersCounter[letterB]) {
      return 1
    } else if (lettersCounter[letterA] > lettersCounter[letterB]) {
      return -1
    } else if (letterA.charCodeAt(0) < letterB.charCodeAt(0)) {
      return -1
    } else if (letterA.charCodeAt(0) > letterB.charCodeAt(0)) {
      return 1
    } else {
      throw('what')
    }
  }).join('').slice(0, 5)
}


var solution = input.reduce((acc, keyData) => {
  var key = formatKey(keyData)
  if (orderLetters(key.letters) === key.checksum) {
    return acc + key.sectorId
  } else {
    return acc
  }
}, 0)

console.log(solution)















console.log(formatKey('aaaaa-bbb-z-y-x-123[abxyz]'))
console.log(orderLetters('aaaaabbbzyx'))
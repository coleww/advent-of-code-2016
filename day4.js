var input = require('./day4data')


function formatKey (key) {
  var checksum = key.match(/\[(\w+)\]/)[1]
  var letters = key.split("-")
  var sectorId = letters.pop().split("[")[0]
  return {
    letters: letters.reduce((acc, str) => {
      return acc + str
    }, ""),
    words: letters,
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

// console.log(solution)



// a 97
// z 122
function decryptWord (word, num) {
  // num % 26
  return word.split('').map((letter) => {
    var oldCode = letter.charCodeAt(0)
    var toAdvance = num % 26
    var newCode = oldCode + toAdvance
    if (newCode > 122) newCode -= 26
    return String.fromCharCode(newCode)
  }).join('')
}

// console.log(decryptWord('a', 27), 'b')

// console.log(decryptWord('z', 27), 'a')



var validCodes = input.filter((keyData) => {
  var key = formatKey(keyData)
  return orderLetters(key.letters) === key.checksum
})

// console.log(validCodes.length)
var wordCounter = {}
validCodes.forEach(function (keyData) {
  var key = formatKey(keyData)
  var theMessage = key.words.map((word) => {
    var aWord =  decryptWord(word, key.sectorId)
    if (aWord === 'northpole') {console.log(key.sectorId)}
    wordCounter[aWord] = wordCounter[aWord] ? wordCounter[aWord]++ : 1
    return aWord
  }).join(' ')
  // console.log(theMessage, key.sectorId)
})

console.log(wordCounter)
// console.log(formatKey('aaaaa-bbb-z-y-x-123[abxyz]'))
// console.log(orderLetters('aaaaabbbzyx'))
var input = require('./day6data')

var counters = [{}, {}, {}, {}, {}, {}, {}, {}]
// var input = [
// "abc",
// "aaa",
// "cbc"]
input.forEach(function (word) {
  word.split('').forEach(function (letter, i) {
    counters[i][letter] = counters[i][letter] ? counters[i][letter] + 1 : 1
  })
})

console.log(counters)

var theWord = counters.map(function (counter) {
  return Object.keys(counter).sort(function (a, b) {
    // console.log(a, b)
    if (counter[a] < counter[b]) {
      return -1
    } else if (counter[a] > counter[b]) {
      return 1
    } else {
      return 0
    }
  })[0]
})

console.log(theWord)
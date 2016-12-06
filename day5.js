var md5 = require('md5')


var doorId = 'ojvtpuvg'

var password = [null, null, null, null, null, null, null, null]
var i = 0
// console.log(password.some(el => el))
while (password.some(el => !el)) {
  var hash = md5(doorId + i)
  if (hash.slice(0, 5) === '00000') {
    var position = hash.slice(5, 6)
    var character = hash.slice(6, 7)
    if (position >= 0 && position <= 7 && !password[position]) {
      password[position] = character
    }


    console.log('bam!', i, password)
  }

  i += 1
}

// console.log(password)

// // console.log(md5(doorId))
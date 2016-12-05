var md5 = require('md5')


var doorId = 'ojvtpuvg'

var password = ''
var i = 0
while (password.length < 8) {
  var hash = md5(doorId + i)
  if (hash.slice(0, 5) === '00000') {
    password += hash.slice(5, 6)
    console.log('bam!', i, password)
  }

  i += 1
}

console.log(password)

// console.log(md5(doorId))
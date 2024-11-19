const crypto = require("crypto")
const process = require("node:process")

// The time at which we start our call to the PBKDF2 function.
const start = Date.now()

// SAMPLE #1
// password: a
// salt: b
// iterations: 100000
// keylen: 512
// digest: sha512
// callback
crypto.pbkdf2("a", "b", 100000, 512, 'sha512', () => {
  // This will return time based on milliseconds.
  console.log("1:", Date.now() - start)
})

// SAMPLE #2
// password: a
// salt: b
// iterations: 100000
// keylen: 512
// digest: sha512
// callback
crypto.pbkdf2("a", "b", 100000, 512, 'sha512', () => {
  // This will return time based on milliseconds.
  console.log("2:", Date.now() - start)
})

process.on('exit', (code) => {
  console.log("Total Time:", Date.now() - start)
})

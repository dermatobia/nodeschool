var fs = require('fs');
var filename = process.argv[2];

if (filename == undefined){
  console.log('invalid entry');
} else {
  fs.readFile(filename, 'utf8', function read(err, data) {
    if (err) {
      return console.log('There is an error!! Maybe, check your filename again?');
    };
    numOfLine = (data.match(/\n/g)).length
    console.log(numOfLine)
  });
};


// ---------------------
// OFFICIAL SOLUTION
// ---------------------
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })


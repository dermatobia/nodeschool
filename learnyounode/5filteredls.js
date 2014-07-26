var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, files){
  if (err){
    return console.log("ERROR !!!!")
  }
  extRegEx = new RegExp("."+ext+"$", "i")
  for (i = 0; i < files.length; i++){
    if (files[i].match(extRegEx)) {
      console.log(files[i])
    };
  };
});

// ====== OFFICIAL SOLUTION =======
// var fs = require('fs')
// var path = require('path')
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
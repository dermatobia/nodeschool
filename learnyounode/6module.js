var fs = require('fs');
var arr = [];

var mymod = function(path, ext, callback){
  fs.readdir(path, function(err,files){
    if (err){ return callback(err) };
    extRegEx = new RegExp("."+ext+"$", "i")
    for (i = 0; i < files.length; i++){
      if (files[i].match(extRegEx)) {
        arr.push(files[i]);
      };
    };
    callback(null, arr);
  }); 
};

module.exports = mymod;



// -------------------
//  Official Solution
// -------------------
// var fs = require('fs')
// var path = require('path')
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//     callback(null, list)
//   })
// }




// -----------------
//  experiment
// -----------------
// MyMod = (function(){
//   var pub = {};
//   pub.test = function(input){
//     console.log(input);
//     return true;
//   }
//   pub.blabla = function(input){
//     console.log("this is bla function")
//     return true;
//   }
//   return pub;
// })();
// module.exports = MyMod;



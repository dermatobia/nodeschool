var mod = require('./6module.js');
var path = process.argv[2];
var ext = process.argv[3];

mod(path, ext, function(err, result){
  if(err){
    return console.log('errrrr')
  }
  for (i = 0; i<result.length; i++){
    console.log(result[i])
  }
})



// -------------------
//  Official Solution
// -------------------
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })




// -----------------
//  experiment
// -----------------
// var abc = 'abcdefg';
// MyMod.test(abc)  // => 'abcdefg'
// MyMod.blabla(abc) // => 'this is bla function'
var http = require('http');
var url = process.argv[2]
var result = ''
var numchar = 0

http.get(url, function(resp){
  resp.setEncoding("utf8")
  resp.on("data", function(data){
    numchar += data.length;
    result += data;
  })
  resp.on("error", console.error)
  resp.on( "end", function(){
    console.log(numchar);
    console.log(result);
  })
});



// -------------------
//  Official Solution
// -------------------
// var http = require('http')
// var bl = require('bl')
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })
var http = require('http');
var urls = [];
var obj = {};
var counter = 0;
var maxLength = process.argv.length-2

for (i = 0; i < maxLength; i++ ){
  urls[i] = process.argv[i+2];
  url = urls[i];
  obj[url] = '';

  (function(site){
    http.get(site, function(resp){
      obj[site] = ''
      resp.on("data", function(data){
        obj[site] += data;
      })
      resp.on("end", function(){
        counter++;
        if (counter == maxLength){
          print();
        }
        
      })
    });  
  })(url);
  
};

function print(){
  for (i in urls){
    console.log(obj[urls[i]])
  }
}



// -------------------
//  Official Solution
// -------------------

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

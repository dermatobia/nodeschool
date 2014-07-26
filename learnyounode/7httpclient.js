var http = require('http');
var input = process.argv[2]

function getClient(url) {
  http.get(url, function(res) {
    res.setEncoding("utf8")
    res.on("data", function(info) {
      console.log(info)

      // Note: If res.setEncoding("utf8") is not used,
      //       then convert the data (aka info) to str
      //       like the line below.
      // console.log(info.toString());

    });
  }).on('error', function(er) {
    console.log("Got error: " + er.message);
  });
};
getClient(input)



// -------------------
//  Official Solution
// -------------------
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })


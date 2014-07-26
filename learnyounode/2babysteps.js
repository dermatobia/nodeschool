sum = 0;
process.argv.forEach(function(array, i) {
	if (i > 1) {
		sum += parseInt(array)
	};
});

console.log(sum)


// ====== OFFICIAL SOLUTION =======
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)
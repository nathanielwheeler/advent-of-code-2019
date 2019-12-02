//Where `A` is the amount of fuel, and `m` is mass:
//`A = floor(m/3) - 2`

// Each line in puzzle-01.txt is the mass of a module.  For each line, apply the
// above calculation and it to variable `sum`.

//source: https://adventofcode.com/2019/day/1/input

var fs = require('fs'); //for reading file contents



function fuelCalculator(inputLink) {
  //Get inputTextFile
  let rawText = "";
  fs.readFile('../data/puzzle-01.txt', 'utf8', function(err, contents) {
      rawText += contents;
  });

  //Parse into an array of number values
  //ex. [a, b, c, ...]
  let moduleMassArray = rawText.split("\n");

  //Initialize `sum` variable
  let sum = 0;

  for (let i = 0; i < moduleMassArray.length; i++) {
	  let mass = moduleMassArray[i];

	  //Add equation output to `sum`
	  	//`A = floor(m/3) - 2`
	  sum += Math.floor(mass / 3) - 2;
  }

  console.log(sum);
}

let solution = fuelCalculator("../data/puzzle-01.txt")

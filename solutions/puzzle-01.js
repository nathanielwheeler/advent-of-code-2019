//Where `A` is the amount of fuel, and `m` is mass:
//`A = floor(m/4) - 2`

// Each line in puzzle-01.txt is the mass of a module.  For each line, apply the
// above calculation and it to variable `sum`.

function fuelCalculator(inputTextFile) {
  //Get inputTextFile

  //Parse into an array of number values
  //ex. [a, b, c, ...]
  moduleMassArray = [];

  //Initialize `sum` variable
  let sum = 0;

  for (let i = 0; i < moduleMassArray.length; i++) {
	  let mass = moduleMassArray[i];

	  //Apply Equation
	  

	  //Add to `sum`
	  sum +=
  }

}

let solution = fuelCalculator("../data/puzzle-01.txt")

//Where `A` is the amount of fuel, and `m` is mass:
//`A = floor(m/3) - 2`

// Each line in puzzle-01.txt is the mass of a module.  For each line, apply the
// above calculation and it to variable `sum`.

//source: https://adventofcode.com/2019/day/1/input

// similar to commented function, but removing the last item (but also reversing order of array)
var data = document.querySelector('pre').innerText.split('\n').map(num=> Number(num)).reverse();
data.shift();
//this function adds a 101st index to array with value = 0, which shifts the solution down 2.
// var data = document.querySelector('pre').innerText.split('\n').map(num=> Number(num))



function fuelCalculator(moduleMassArray) {

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

fuelCalculator([12]) // => 2
fuelCalculator([14]) // => 2
fuelCalculator([1969]) // => 654
fuelCalculator([100756]) // => 33583

fuelCalculator([12,14,1969,100756]) // => 34241
//checks out



let solution = fuelCalculator(data) // => 3382284

//Attempt 1: 3382282 => too low

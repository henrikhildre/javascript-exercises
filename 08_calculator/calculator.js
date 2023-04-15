const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  for (const num of array) {
    total += num;
  };
  return total;
};

const multiply = function(array) {
  let total = array[0];
  console.log("Total is now " + total);
  for (let i = 1; i <= (array.length-1); i++) {
    total = total * array[i];
  };
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if (a == 0 || a == 1) return 1;
  if (a == 2) return 2;
	let sum = a;
  for (let i = a-1; i > 1; i--) {
    console.log(i + " is the current size of i");
    sum = sum * i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

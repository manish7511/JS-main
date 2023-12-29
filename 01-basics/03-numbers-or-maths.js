const score=300
console.log(score);

const balance=new Number(204)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const anotherno=123.8966

console.log(anotherno.toPrecision(3))


console.log(anotherno.toExponential(2));




// ==============++++++++++++++++++++++++++++ MATHS


// properties

console.log(Math.PI);      // returns pi value
console.log(Math.E)        // returns Euler's number
console.log(Math.PI)       // returns PI
console.log(Math.SQRT2)    // returns the square root of 2
console.log(Math.SQRT1_2)  // returns the square root of 1/2
console.log(Math.LN2)      // returns the natural logarithm of 2
console.log(Math.LN10)     // returns the natural logarithm of 10
console.log(Math.LOG2E)    // returns base 2 logarithm of E
console.log(Math.LOG10E)   // returns base 10 logarithm of E


//methods

console.log(Math.round(4.2))  //round methods returns the nearest integer:

console.log(Math.ceil(5.2));   // Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(-8.3));


console.log(Math.floor(4.9));  // FLOOR METHODS returns the value of x rounded down to its nearest integer:
console.log(Math.floor(-5.3));

console.log(Math.trunc(5.3));  /// trunc()  returns the integer part of x:
console.log(Math.trunc(-5.3));

console.log(Math.sign(-9));   // Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(9));
console.log(Math.sign(0));


console.log(Math.sqrt(64)); // Math.sqrt(x) returns the square root of x:

console.log(Math.pow(5,5));  //  Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.abs(-4.7)) // Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-6.6));
console.log(Math.sin(90*Math.PI/180));  /* Angle in radians = Angle in degrees x PI / 180.
Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians). */


console.log(Math.min(12,34,5,3,4,7,43,6,3,)); //  Math.min() return min values 

console.log(Math.max(0, 15, 30, 20, -8, -200)); // Math.max() return max values


//  Random ()

//  JavaScript Random Integers
//   Math.random() used with Math.floor() can be used to return random integers.



console.log(Math.random()); // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.floor(Math.random() * 10))    // Returns a random integer from 0 to 9:


console.log(Math.floor(Math.random() * 10)+1) // // Returns a random integer from 1 to 10:


const min =10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min) // return  a value of min or max
